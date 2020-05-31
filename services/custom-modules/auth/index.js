const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.JWT_AUTH_KEY ?
    process.env.JWT_AUTH_KEY :
    "This is a random secret";
const db = require("../database/index");

const hashPassword = (password) => {
    return new Promise((resolve, reject) =>
        bcrypt.hash(password, 10, (err, hash) => {
            err ? reject(err) : resolve(hash);
        })
    );
};

const createToken = (username, userrole, mobile_number) => {
    return new Promise((resolve, reject) => {
        try {
            const accessToken = jwt.sign({ username: username, role: userrole, mobile_number: mobile_number, exp: Math.floor(Date.now() / 1000) + (60 * 60) },
                secretKey);
            resolve(accessToken);
        } catch (error) {
            reject(error.message);
        }
    });
};

const validateToken = (req, res, next) => {
    if (req.originalUrl === "/api/user/signup" || req.originalUrl === "/api/user/signin" || req.originalUrl === "/api/user/signup/verify" || req.originalUrl === "/api/user/forgot-password/verify") {
        next();
    } else {
        let token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send({ "error": { "message": "Unauthenticated access" } });
        }

        jwt.verify(token, accessTokenSecret, (err, userJWT) => {
            if (err) {
                return res.status(401).send({ "error": { "message": "Unauthenticated access" } });
            }

            findByToken(token).then((user) => {
                if (user.username == userJWT.username) {
                    req.user = userJWT;
                    next();
                } else {
                    return res.status(403).send({ "error": { "message": "Unauthorized access" } });
                }
            });
        });
    }
};

const findByToken = (token) => {
    return db
        .basicQuery("SELECT * FROM users WHERE token = '" + token + "'")
        .then((data) => data.rows[0]);
};

module.exports = {
    hashPassword,
    createToken,
    validateToken,
};
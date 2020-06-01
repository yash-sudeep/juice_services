const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_AUTH_KEY ?
    process.env.JWT_AUTH_KEY :
    "Secret Key";
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

        jwt.verify(token, secretKey, (err, userJWT) => {
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
    let query = "SELECT * FROM USERS WHERE TOKEN=\'" + token + "\'";
    return db
        .basicQuery(query)
        .then((data) => data);
};

module.exports = {
    hashPassword,
    createToken,
    validateToken,
};
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
        const accessToken = jwt.sign({ username: username, role: userrole, mobile_number: mobile_number },
            accessTokenSecret, { expiresIn: "30m" }
        );
        resolve(accessToken);
    });
};

const validateToken = (req, res, next) => {
    if (req.originalUrl === "/api/signup") {
        next();
    } else {
        let token = req.headers["Authorization"];
        if (!token) {
            return res.status(400).send({
                status: false,
                message: "Access Token cannot be empty",
            });
        }

        jwt.verify(token, accessTokenSecret, (err, userJWT) => {
            if (err) {
                return res.status(401).send({
                    status: false,
                    message: "Unauthorized Access",
                });
            }

            findByToken(token).then((user) => {
                if (user.username == userJWT.username) {
                    req.user = userJWT;
                    next();
                } else {
                    return res.status(401).send({
                        status: false,
                        message: "Unauthorized Access",
                    });
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
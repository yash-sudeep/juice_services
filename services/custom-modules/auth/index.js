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
            const accessToken = jwt.sign({
                    username: username,
                    role: userrole,
                    mobile_number: mobile_number,
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                },
                secretKey
            );
            resolve(accessToken);
        } catch (error) {
            reject(error.message);
        }
    });
};

const validateToken = (req, res, next) => {
    if (
        req.originalUrl === "/api/user/signup" ||
        req.originalUrl === "/api/user/signin" ||
        req.originalUrl === "/api/user/signup/verify" ||
        req.originalUrl === "/api/user/forgot-password/verify" ||
        req.originalUrl === "/api//user/forgot-password" || 
        (req.originalUrl === "/api/program" && req.method === 'GET') ||
        req.originalUrl === "/api/program/description" ||
        (req.originalUrl.includes("/api/products") && req.method === 'GET') || 
        !req.originalUrl.includes('/api')
    ) {
        next();
    } else {
        let authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res
                .status(401)
                .send({ errorCode: 1, message: "Unauthenticated access" });
        }
        let token = authHeader.split(" ");
        jwt.verify(token[1], secretKey, (err, userJWT) => {
            if (err) {
                return res
                    .status(401)
                    .send({ errorCode: 1, message: "Unauthenticated access" });
            }

            findByToken(token[1]).then(() => {
                req.user = userJWT;
                next();
            }).catch((error) => {
                return res
                    .status(403)
                    .send({ errorCode: 1, message: error.message });
            });
        });
    }
};

const findByToken = (token) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM USERS WHERE TOKEN='" +
                token +
                "');";
            let res = await db.basicQuery(query);
            if (res[0].exists) {
                resolve();
            } else {
                reject(new Error("Unauthorized access"));
            }
        } catch (error) {
            reject(new Error("Unauthorized access"));
        }
    });
};

module.exports = {
    hashPassword,
    createToken,
    validateToken,
};

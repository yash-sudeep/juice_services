const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.JWT_AUTH_KEY ?
    process.env.JWT_AUTH_KEY :
    "This is a random secret";

const hashPassword = (password) => {
    return new Promise((resolve, reject) =>
        bcrypt.hash(password, 10, (err, hash) => {
            err ? reject(err) : resolve(hash);
        })
    );
};

const createToken = (username, userrole) => {
    return new Promise((resolve, reject) => {
        const accessToken = jwt.sign({ username: username, role: userrole },
            accessTokenSecret, { expiresIn: "30m" }
        );
        resolve(accessToken);
    });
};

const validateToken = (req, res, next) => {
    let token = req.headers["Authorization"];
    if (!token) {
        return res.status(400).send({
            status: false,
            message: "Access Token cannot be empty",
        });
    }

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(401).send({
                status: false,
                message: "Unauthorized Access",
            });
        }
        req.user = user;
        next();
    });
};

module.exports = {
    hashPassword,
    createToken,
    validateToken,
};
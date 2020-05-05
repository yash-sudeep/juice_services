var auth = require("./../../custom-modules/auth/index");
const db = require("./../../custom-modules/database/index");

module.exports = {

    signUp: function(req) {
        return new Promise((resolve, reject) => {
            const user = req.body;
            auth
                .hashPassword(user.password)
                .then((hashedPassword) => {
                    delete user.password;
                    user.password_digest = hashedPassword;
                })
                .then(() => auth.createToken(user.username, user.userrole))
                .then((token) => (user.token = token))
                .then(() => createUser(user))
                .then((user) => {
                    delete user.password_digest;
                    resolve(user);
                })
                .catch((err) => {
                    console.error(err);
                    reject(err);
                });
        });
    },
};

function createUser(user) {
    return new Promise(async(resolve, reject) => {
        user.username = user.firstname + user.lastname;
        let query =
            "INSERT INTO USERS (FIRSTNAME,LASTNAME,USERNAME,EMAILID,MOBILENUMBER,USERROLE,TOKEN,ISLOGGEDIN,PASSWORD) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
        let values = [
            user.firstname,
            user.lastname,
            user.username,
            user.email,
            user.mobile_number,
            user.userrole,
            user.token,
            true,
            user.password_digest,
        ];
        try {
            await db.parameterizedQuery(query, values);
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
}
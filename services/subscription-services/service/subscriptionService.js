const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");
const moment = require("moment");

module.exports = {
    getAllSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT * FROM SUBSCRIPTIONS";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject(error.message);
            }
        });
    },
    addSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const subscription = req.body;
                if (req.user.userrole === "Seller") {
                    query =
                        "INSERT INTO SUBSCRIPTIONS (PROGRAMID,PACKAGE,PRICE,CREATEDAT) VALUES($1, $2, $3, $4) RETURNING *";
                    let values = [
                        subscription.programId,
                        subscription.package,
                        subscription.price,
                        moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
                    ];
                    await db.parameterizedQuery(query, values);
                    resolve("Subscription Added Successfully");
                } else {
                    reject("You do not have permissions to add a subscription.");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    updateSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { package, subscriptionId, price } = req.body;
                if ((req.user.userrole === "Seller")) {
                    query =
                        "UPDATE SUBSCRIPTIONS SET PACKAGE='" +
                        package +
                        "', PRICE=" +
                        price +
                        " WHERE SUBSCRIPTIONID= " +
                        subscriptionId;
                    await db.basicQuery(query);
                    resolve("Subscription Updated Successfully");
                } else {
                    reject("You do not have permissions to update a subscription.");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    deleteSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                if (req.user.userrole === "Seller") {
                    query = "DELETE * FROM SUBSCRIPTIONS WHERE SUBSCRIPTIONID= ";
                    await db.basicQuery(query);
                    resolve("Subscription Deleted Successfully");
                } else {
                    reject("You do not have permissions to delete a subscription.");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
};
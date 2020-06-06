const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");
const moment = require("moment");

module.exports = {
    getAllSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT subscriptions.subid as subscriptionId,subscriptions.package,subscriptions.price,programs.name,programs.programid as programId FROM subscriptions INNER JOIN programs ON programs.programid = subscriptions.subid;";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    addSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: "Invalid Input" });
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
                    resolve("Subscription Added");
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    updateSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: "Invalid Input" });
                    return;
                }

                const { package, subscriptionId, price } = req.body;
                if (req.user.userrole === "Seller") {
                    let valid = await validateSubscriptionID(subscriptionId);
                    if (valid) {
                        let query =
                            "UPDATE SUBSCRIPTIONS SET PACKAGE='" +
                            package +
                            "', PRICE=" +
                            price +
                            " WHERE SUBID= " +
                            subscriptionId;
                        await db.basicQuery(query);
                        resolve("Subscription Updated");
                    } else {
                        reject({ code: 404, message: "Subscription Not Found" });
                    }
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    deleteSubscriptions: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: "Invalid Input" });
                    return;
                }

                const { subscriptionId } = req.body;
                if (req.user.userrole === "Seller") {
                    let valid = await validateSubscriptionID(subscriptionId);
                    if (valid) {
                        let query = "DELETE FROM SUBSCRIPTIONS WHERE SUBID=" + subscriptionId;
                        await db.basicQuery(query);
                        resolve("Subscription Deleted");
                    } else {
                        reject({ code: 404, message: "Subscription Not Found" });
                    }
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
};

const validateSubscriptionID = (subId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM SUBSCRIPTIONS WHERE SUBSCRIPTIONID='" +
                subId +
                "');";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
};
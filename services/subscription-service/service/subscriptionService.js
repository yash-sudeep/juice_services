const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");
const moment = require("moment");

module.exports = {
    getAllSubscriptions: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = "SELECT subscriptions.subid as subscriptionId,subscriptions.package,subscriptions.price,programs.name,programs.programid as programId FROM subscriptions INNER JOIN programs ON programs.programid = subscriptions.programid ORDER BY subscriptions.subid;";
                const res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    addSubscriptions: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: "Invalid Input" });
                    return;
                }

                const subscription = req.body;
                if (req.user.userrole === "Seller") {
                    const programValidationResult = await checkProgramID(subscription.programId);
                    if (programValidationResult) {
                        const valid = await checkSubscription(subscription.programId, subscription.package);
                        if (!valid) {
                            const query =
                                "INSERT INTO SUBSCRIPTIONS (PROGRAMID,PACKAGE,PRICE,CREATEDAT) VALUES($1, $2, $3, $4) RETURNING *";
                            const values = [
                                subscription.programId,
                                subscription.package,
                                subscription.price,
                                moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
                            ];
                            await db.parameterizedQuery(query, values);
                            resolve("Subscription Added");
                        } else {
                            reject({ code: 409, message: "Subscription already exists" });
                        }
                    } else {
                        reject({ code: 404, message: "Program Not Found" });
                    }
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    updateSubscriptions: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: "Invalid Input" });
                    return;
                }

                const { packageName, subscriptionId, price } = req.body;
                if (req.user.userrole === "Seller") {
                    const valid = await validateSubscriptionID(subscriptionId);
                    if (valid) {
                        const query =
                            "UPDATE SUBSCRIPTIONS SET PACKAGE='" +
                            packageName +
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
    deleteSubscriptions: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const subscriptionId = req.query.subscriptionId;
                if (subscriptionId) {
                    if (req.user.userrole === "Seller") {
                        const valid = await validateSubscriptionID(subscriptionId);
                        if (valid) {
                            const query = "DELETE FROM SUBSCRIPTIONS WHERE SUBID=" + subscriptionId;
                            await db.basicQuery(query);
                            resolve("Subscription Deleted");
                        } else {
                            reject({ code: 404, message: "Subscription Not Found" });
                        }
                    } else {
                        reject({ code: 403, message: "Access Forbidden" });
                    }
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
};

const validateSubscriptionID = (subId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM SUBSCRIPTIONS WHERE SUBSCRIPTIONID='" +
                subId +
                "');";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
};

const checkSubscription = (programId, packageName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM SUBSCRIPTIONS WHERE PROGRAMID=" +
                programId +
                " AND PACKAGE='" + packageName + "');";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
}

const checkProgramID = (programId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM PROGRAMS WHERE PROGRAMID='" +
                programId +
                "');";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
}

const db = require("../../custom-modules/database/index");
const { validationResult } = require('express-validator');
var moment = require("moment");

module.exports = {
    getAllOrdersAdmin: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const product = req.body;
                let query = "SELECT userid FROM USERS WHERE USERROLE='Seller'";
                let role = await db.basicQuery(query);
                let seller_ids = [];
                let programValidationResult = await validateProgram(product.pid);
                let userID = parseInt(req.params.id);
                if (role.length > 0 && programValidationResult) {
                    role.map((el) => seller_ids.push(el.userid));
                    if (seller_ids.includes(userID)) {
                        let query1 = "SELECT * FROM ORDERS"
                        let res = await db.basicQuery(query1);
                        resolve(res[0]);
                    } else {
                        reject({ code: 403, message: "Access Forbidden" });
                    }
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                console.log(error);
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    getUserWiseOrders: function (req) {
        return new Promise(async (resolve, reject) => {
            const mobilenumber = req.user.mobile_number;
            try {
                let query = "SELECT orders.ORDERID,orders.CREATEDAT,orders.STATUS,orders.PAYMENTSTATUS,orders.PAYMENTTYPE,orders.PAYMENTVENDOR,orders.COST,orders.ITEMS,orders.USERID,orders.ADDRESSID,address.PINCODE,address.addressid,address.city,address.pincode,address.address,address.city,address.state,address.landmark,address.type,address.name,address.MOBILENUMBER FROM orders INNER JOIN address ON orders.addressid = address.addressid AND orders.mobilenumber = $1";
                let values = [mobilenumber];
                let res = await db.parameterizedQuery(query, values);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    cancelOrder: function (req) {
        return new Promise(async (resolve, reject) => {
            const mobilenumber = req.user.mobile_number;
            try {
                const orderId = req.query.orderId;
                if (orderId) {
                    const valid = await checkOrderID(orderId);
                    if (valid) {
                        let query = "Update orders set status='canceled' where MOBILENUMBER='" + mobilenumber + "' AND ORDERID= " + orderId + " ";
                        await db.basicQuery(query, values);
                        resolve("Order Cancelled");
                    } else {
                        reject({ code: 404, message: "Order Not Found" });
                    }
                } else {
                    reject({ code: 404, message: "Invalid Order" });
                }
            } catch (error) {
                console.log(error);
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    placeOrder: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const order = req.body;
                let query = "SELECT userid FROM USERS WHERE USERROLE='Consumer'";
                let role = await db.basicQuery(query);
                let consumer_ids = [];
                let userID = parseInt(order.userid);
                if (role.length > 0) {
                    role.map((el) => consumer_ids.push(el.userid));
                    if (consumer_ids.includes(userID)) {
                        query = "INSERT INTO ORDERS (CREATEDAT,STATUS,PAYMENTSTATUS,MOBILENUMBER,PAYMENTTYPE,PAYMENTVENDOR,COST,ITEMS,USERID,ADDRESSID) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
                        let values = [
                            moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
                            "pending",
                            order.paymentstatus,
                            req.user.mobile_number,
                            "online",
                            order.paymentvendor,
                            order.cost,
                            '' + JSON.stringify(order.items) + '',
                            order.userid,
                            order.addressid,
                        ];
                        let res = await db.parameterizedQuery(query, values);
                        let query_orderstatus = "INSERT INTO ORDERS_STATUS (CREATEDAT,STATUS,PACKINGSTATUS,DELIVERYSTATUS,SHIPPINGSTATUS,ISRETURNED,REFUNDSTATUS,ORDERID) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";

                        let value1 = [
                            moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
                            "pending",
                            "pending", "pending", "pending", false, "pending",
                            res[0].orderid
                        ];
                        await db.parameterizedQuery(query_orderstatus, value1);
                        resolve("Order Added Successfully");
                    } else {
                        reject({ code: 403, message: "Access Forbidden" });
                    }
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                console.log(error);
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
};

function validateProgram(ids) {
    return new Promise(async (resolve, reject) => {
        try {
            let query = "SELECT PROGRAMID FROM PROGRAMS";
            let pid = await db.basicQuery(query);
            let program_ids = [];
            let flag = true;
            pid.map((el) => program_ids.push(el.programid));
            for (let i = 0; i < ids.length; i++) {
                if (!program_ids.includes(ids[i])) {
                    flag = false;
                    break;
                }
            }
            resolve(flag);
        } catch (error) {
            reject(false);
        }
    });
}

const checkOrderID = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query =
                "SELECT EXISTS (SELECT TRUE FROM ORDERS WHERE ORDERID='" +
                orderId +
                "');";
            const res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
}
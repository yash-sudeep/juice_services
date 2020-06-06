const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");

module.exports = {
    getAllProducts: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query =
                    "SELECT PRODUCTID as productId,NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS,PROGRAMID FROM PRODUCTS WHERE STATUS=true";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    getProgramWiseProducts: function(req) {
        return new Promise((resolve, reject) => {
            try {
                let programId = parseInt(req.query.id);
                if (programId) {
                    validateProgram([programId]).then(async(valid) => {
                        if (valid) {
                            let query =
                                "SELECT PRODUCTID as productId,NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS FROM PRODUCTS WHERE " +
                                req.params.id +
                                "=ANY(PROGRAMID)";
                            let res = await db.basicQuery(query);
                            resolve(res);
                        } else {
                            reject({ code: 404, message: "Invalid Program" });
                        }
                    });
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    getProductDescription: function(req) {
        return new Promise((resolve, reject) => {
            try {
                let productId = parseInt(req.params.id);
                validateProduct([productId]).then(async(valid) => {
                    if (valid) {
                        let query =
                            "SELECT NAME, DESCRIPTION, ADVANTAGES, DISADVANTAGES, INGREDIENTS FROM PRODUCTS WHERE PRODUCTID=" +
                            productId;
                        let res = await db.basicQuery(query);
                        resolve(res);
                    } else {
                        reject({ code: 404, message: "Product Not Found" });
                    }
                });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    addProduct: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const product = req.body;
                let programValidationResult = await validateProgram(product.pid);
                if (req.user.role === "Seller") {
                    if (programValidationResult) {
                        let productValidationResult = await validateProductName(product.name);
                        if (!productValidationResult) {
                            let query =
                                "INSERT INTO PRODUCTS (NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS,STATUS,QUANTITY,MEDIAPATH,PROGRAMID,PRICE) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
                            let values = [
                                product.name,
                                product.description,
                                JSON.stringify(product.advantages)
                                .replace("[", "{")
                                .replace("]", "}")
                                .replace(/'/g, '"'),
                                JSON.stringify(product.disadvantages)
                                .replace("[", "{")
                                .replace("]", "}")
                                .replace(/'/g, '"'),
                                JSON.stringify(product.ingredients)
                                .replace("[", "{")
                                .replace("]", "}")
                                .replace(/'/g, '"'),
                                product.status,
                                product.quantity ? product.quantity : 0,
                                product.mediapath,
                                JSON.stringify(product.pid).replace("[", "{").replace("]", "}"),
                                product.price ? product.price : 0,
                            ];
                            await db.parameterizedQuery(query, values);
                            resolve("Product Added");
                        } else {
                            reject({ code: 409, message: "Product Already Exists" });
                        }
                    } else {
                        reject({ code: 400, message: "Invalid Input" });
                    }
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    updateProduct: function(req) {
        return new Promise((resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { productId, status } = req.body;
                validateProduct([productId]).then(async(valid) => {
                    if (valid) {
                        if (req.user.userrole === "Seller") {
                            query =
                                "UPDATE PRODUCTS SET STATUS=" + status + "WHERE PRODUCTID= ";
                            productId;
                            await db.basicQuery(query);
                            resolve("Product Deleted");
                        } else {
                            reject({ code: 403, message: "Access Forbidden" });
                        }
                    } else {
                        reject({ code: 404, message: "Product Not Found" });
                    }
                });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    deleteProduct: function(req) {
        return new Promise((resolve, reject) => {
            try {
                const { productId } = req.body;
                validateProduct([productId]).then(async(valid) => {
                    if (valid) {
                        if (req.user.userrole === "Seller") {
                            query = "DELETE FROM PRODUCTS WHERE PRODUCTID= " + productId;
                            await db.basicQuery(query);
                            resolve("Product Deleted");
                        } else {
                            reject({ code: 403, message: "Access Forbidden" });
                        }
                    } else {
                        reject({ code: 404, message: "Product Not Found" });
                    }
                });
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
};

const validateProgram = (ids) => {
    return new Promise(async(resolve, reject) => {
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
};

const validateProduct = (productId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM PRODUCTS WHERE PRODUCTID=" +
                productId +
                ");";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error.message);
        }
    });
};

const validateProductName = (productName) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM PRODUCTS WHERE NAME=" +
                productName +
                ");";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error.message);
        }
    });
}
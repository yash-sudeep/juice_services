const db = require("./../../custom-modules/database/index");
const { validationResult } = require('express-validator');

module.exports = {
    getAllProducts: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT * FROM PRODUCTS";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    getProgramWiseProducts: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT * FROM PRODUCTS WHERE PROGRAMID=" + req.params.id;
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    getProductDescription: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query =
                    "SELECT NAME, DESCRIPTION, ADVANTAGES, DISADVANTAGES, INGREDIENTS FROM PRODUCTS WHERE PRODUCTID=" +
                    req.params.id;
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    addProduct: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const product = req.body;
                let programValidationResult = await validateProgram(product.pid);
                if (req.user.role === 'Seller' && programValidationResult) {
                    let query = "INSERT INTO PRODUCTS (NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS,STATUS,QUANTITY,MEDIAPATH,PROGRAMID,PRICE) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
                    let values = [
                        product.name,
                        product.description,
                        JSON.stringify(product.advantages).replace('[', '{').replace(']', '}').replace(/'/g, '"'),
                        JSON.stringify(product.disadvantages).replace('[', '{').replace(']', '}').replace(/'/g, '"'),
                        JSON.stringify(product.ingredients).replace('[', '{').replace(']', '}').replace(/'/g, '"'),
                        product.status,
                        product.quantity ? product.quantity : 0,
                        product.mediapath,
                        JSON.stringify(product.pid).replace('[', '{').replace(']', '}'),
                        product.price ? product.price : 0,
                    ];
                    await db.parameterizedQuery(query, values);
                    resolve({ message: "Product Added Successfully" });
                } else {
                    reject("Invalid Input");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    updateProduct: function(req) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                reject(errors.array());
                return;
            }

            const { productId, status } = req.body;
            if (req.user.userrole === "Seller") {
                query = "UPDATE PRODUCTS SET STATUS=" + status + "WHERE PRODUCTID= "
                productId;
                await db.basicQuery(query);
                resolve("Product Deleted Successfully");
            } else {
                reject("You do not have permissions for this operation.");
            }
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    },
    deleteProduct: function(req) {
        try {
            const productId = req.params.id;
            if (req.user.userrole === "Seller") {
                query = "DELETE * FROM PRODUCTS WHERE PRODUCTID= " + productId;
                await db.basicQuery(query);
                resolve("Product Deleted Successfully");
            } else {
                reject("You do not have permissions for this operation.");
            }
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    }
};

function validateProgram(ids) {
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
}
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
                reject(error);
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
                reject(error);
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
                reject(error);
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
                let query = "SELECT userid FROM USERS WHERE USERROLE='Seller'";
                let role = await db.basicQuery(query);
                let seller_ids = [];
                let programValidationResult = await validateProgram(product.pid);
                let userID = parseInt(req.params.id);
                if (role.length > 0 && programValidationResult) {
                    role.map((el) => seller_ids.push(el.userid));
                    if (seller_ids.includes(userID)) {
                        query = "INSERT INTO PRODUCTS (NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS,STATUS,QUANTITY,MEDIAPATH,PROGRAMID,PRICE) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
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
                        let res = await db.parameterizedQuery(query, values);
                        resolve({ message: "Product Added Successfully" });
                    } else {
                        reject("You do not have permissions to add a product.");
                    }
                } else {
                    reject("Invalid Input");
                }
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
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
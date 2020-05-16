const db = require("./../../custom-modules/database/index");

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
                const product = req.body;
                let query = "SELECT USERROLE FROM USERS WHERE USERID=" + req.params.id;
                let role = await db.basicQuery(query);
                if (role === "Seller" && validateProgram(product.pid)) {
                    query =
                        "INSERT INTO USERS (NAME,DESCRIPTION,ADVANTAGES,DISADVANTAGES,INGREDIENTS,STATUS,QUANTITY,MEDIAPATH,PROGRAMID,PRICE) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
                    let values = [
                        product.name,
                        product.description,
                        product.advantages,
                        product.disadvantages,
                        product.ingredients,
                        product.status,
                        product.quantity,
                        product.mediapath,
                        product.price,
                        product.pid
                    ];
                } else {
                    reject("You do not have permissions to add a product.");
                }
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
};

async function validateProgram(ids) {
    let query = 'SELECT PROGRAMID FROM PROGRAMS';
    let pid = await db.basicQuery(query);
    for (let i = 0; i < ids.length; i++) {
        if (!pid.includes(ids[i])) {
            return false;
        }
    }
    return true;
}
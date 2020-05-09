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
                let query = "SELECT NAME, DESCRIPTION, ADVANTAGES, DISADVANTAGES, INGREDIENTS FROM PRODUCTS WHERE PRODUCTID=" + req.params.id;
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
};
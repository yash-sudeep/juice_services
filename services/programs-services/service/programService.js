const db = require("./../../custom-modules/database/index");
const { validationResult } = require('express-validator');

module.exports = {
    getAllProgrammes: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT * FROM PROGRAMS";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
    getProgramDescription: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT NAME,DESCRIPTION,PRICE FROM PROGRAMS WHERE PROGRAMID=" + req.params.id;
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
    addProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const program = req.body;
                let query = "SELECT userid FROM USERS WHERE USERROLE='Seller'";
                let role = await db.basicQuery(query);
                let seller_ids = [];
                let userID = parseInt(req.params.id);
                if (role.length > 0 && validateProgram(program.name)) {
                    role.map((el) => seller_ids.push(el.userid));
                    if (seller_ids.includes(userID)) {
                        query = "INSERT INTO PROGRAMS (NAME,DESCRIPTION,STATUS,PRICE) VALUES($1, $2, $3, $4) RETURNING *";
                        let values = [
                            program.name,
                            program.description,
                            program.status,
                            program.price,
                        ];
                        let res = await db.parameterizedQuery(query, values);
                        resolve({ message: "Program Added Successfully" });
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

function validateProgram(name) {
    return new Promise(async(resolve, reject) => {
        try {
            let query = "SELECT NAME FROM PROGRAMS";
            let pname = await db.basicQuery(query);
            let program_names = [];
            let flag = true;
            pname.map((el) => program_names.push(el.name));
            if (!program_names.includes(name)) {
                flag = false;
                break;
            }
            resolve(flag);
        } catch (error) {
            reject(false);
        }
    });
}
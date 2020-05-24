const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");

module.exports = {
    getAllProgrammes: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT * FROM PROGRAMS";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    getProgramDescription: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query =
                    "SELECT NAME,DESCRIPTION,PRICE FROM PROGRAMS WHERE PROGRAMID=" +
                    req.params.id;
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                console.log(error);
                reject(error.message);
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
                if (req.user.role === "Seller" && validateProgram(program.name)) {
                    let query =
                        "INSERT INTO PROGRAMS (NAME,DESCRIPTION,STATUS,PRICE) VALUES($1, $2, $3, $4) RETURNING *";
                    let values = [
                        program.name,
                        program.description,
                        program.status,
                        program.price,
                    ];
                    let res = await db.parameterizedQuery(query, values);
                    resolve({ message: "Program Added Successfully" });
                } else {
                    reject("Invalid Input");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    updateProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject(errors.array());
                    return;
                }

                const { programId, status, price } = req.body;
                if (req.user.role === "Seller" && validateProgram(program.name)) {
                    let query =
                        "UPDATE PROGRAMS SET STATUS=" +
                        status +
                        ", PRICE=" +
                        price +
                        " WHERE PROGRAMID=" +
                        programId;
                    let res = await db.basicQuery(query, values);
                    resolve({ message: "Program Updated Successfully" });
                } else {
                    reject("Invalid Input");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
            }
        });
    },
    deleteProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                if (req.user.role === "Seller") {
                    let query = "DELETE * FROM PROGRAMS WHERE PROGRAMID=" + req.params.id;
                    let res = await db.basicQuery(query);
                    resolve(res);
                } else {
                    reject("You do not have Permissions for this operation");
                }
            } catch (error) {
                console.log(error);
                reject(error.message);
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
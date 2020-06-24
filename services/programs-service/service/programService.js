const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");

module.exports = {
    getAllProgrammes: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                let query = "SELECT PROGRAMID as programId,NAME,DESCRIPTION,PRICE FROM PROGRAMS";
                let res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    getProgramDescription: function(req) {
        return new Promise((resolve, reject) => {
            try {
                let programId = parseInt(req.query.id);
                if (programId) {
                    checkProgramID().then(async(valid) => {
                        if (valid) {
                            let query =
                                "SELECT NAME,DESCRIPTION,PRICE FROM PROGRAMS WHERE PROGRAMID=" +
                                programId;
                            let res = await db.basicQuery(query);
                            resolve(res);
                        } else {
                            reject({ code: 404, message: "Invalid Program" });
                        }
                    })
                } else {
                    reject({ code: 400, message: "Invalid Input" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    addProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const program = req.body;
                if (req.user.role === "Seller") {
                    let programValidationResult = await validateProgram(program.name);
                    if (!programValidationResult) {
                        let query =
                            "INSERT INTO PROGRAMS (NAME,DESCRIPTION,STATUS,PRICE) VALUES($1, $2, $3, $4) RETURNING *";
                        let values = [
                            program.name,
                            program.description,
                            program.status,
                            program.price,
                        ];
                        await db.parameterizedQuery(query, values);
                        resolve("Program Added Successfully");
                    } else {
                        reject({ code: 409, message: "Program already exists" });
                    }
                } else {
                    reject({ code: 403, message: "Access Forbidden" });
                }
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    updateProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { programId, status, price } = req.body;
                if (req.user.role === "Seller") {
                    let valid = await checkProgramID(programId);
                    if (valid) {
                        let query =
                            "UPDATE PROGRAMS SET STATUS=" +
                            status +
                            ", PRICE=" +
                            price +
                            " WHERE PROGRAMID=" +
                            programId;
                        await db.basicQuery(query, values);
                        resolve("Program Updated");
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
    deleteProgram: function(req) {
        return new Promise(async(resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { programId } = req.body;
                if (req.user.role === "Seller") {
                    let valid = await checkProgramID(programId);
                    if (valid) {
                        let query = "DELETE FROM PROGRAMS WHERE PROGRAMID=" + programId;
                        await db.basicQuery(query);
                        resolve("Program Deleted");
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
};

const validateProgram = (name) => {
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

const checkProgramID = (programId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let query =
                "SELECT EXISTS (SELECT TRUE FROM PROGRAMS WHERE PROGRAMID='" +
                programId +
                "');";
            let res = await db.basicQuery(query);
            resolve(res[0].exists);
        } catch (error) {
            reject(error);
        }
    });
}
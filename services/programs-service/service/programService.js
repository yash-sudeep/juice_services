const db = require("./../../custom-modules/database/index");
const { validationResult } = require("express-validator");
var moment = require("moment");

module.exports = {
    getAllProgrammes: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const query = "SELECT PROGRAMID as programId,NAME,DESCRIPTION,PRICE,MIN_BUY_CRITERIA FROM PROGRAMS WHERE STATUS=true ORDER BY PROGRAMID";
                const res = await db.basicQuery(query);
                resolve(res);
            } catch (error) {
                reject({ code: 400, message: "Invalid Input" });
            }
        });
    },
    getProgramDescription: function (req) {
        return new Promise((resolve, reject) => {
            try {
                const programId = parseInt(req.query.id);
                if (programId) {
                    checkProgramID().then(async (valid) => {
                        if (valid) {
                            const query =
                                "SELECT NAME,DESCRIPTION,PRICE,MIN_BUY_CRITERIA FROM PROGRAMS WHERE PROGRAMID=" +
                                programId;
                            const res = await db.basicQuery(query);
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
    addProgram: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const program = req.body;
                if (req.user.role === "Seller") {
                    const programValidationResult = await validateProgram(program.name);
                    if (!programValidationResult) {
                        const query =
                            "INSERT INTO PROGRAMS (NAME,DESCRIPTION,STATUS,PRICE,CREATEDAT,MIN_BUY_CRITERIA) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
                        const values = [
                            program.name,
                            program.description,
                            program.status,
                            program.price,
                            moment().format("YYYY-MM-DD HH:mm:ss.SSSSS"),
                            program.min_buy_criteria,
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
    updateProgram: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    reject({ code: 400, message: errors.array() });
                    return;
                }

                const { programId, status, price, minBuyCriteria } = req.body;
                if (req.user.role === "Seller") {
                    const valid = await checkProgramID(programId);
                    if (valid) {
                        const query =
                            "UPDATE PROGRAMS SET STATUS=" +
                            status +
                            ", PRICE=" +
                            price +
                            ", MIN_BUY_CRITERIA=" + minBuyCriteria + " WHERE PROGRAMID=" +
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
    deleteProgram: function (req) {
        return new Promise(async (resolve, reject) => {
            try {
                const programId = req.query.programId;
                if (programId) {
                    if (req.user.role === "Seller") {
                        const valid = await checkProgramID(programId);
                        if (valid) {
                            const query = "DELETE FROM PROGRAMS WHERE PROGRAMID=" + programId;
                            await db.basicQuery(query);
                            resolve("Program Deleted");
                        } else {
                            reject({ code: 404, message: "Program Not Found" });
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

const validateProgram = (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = "SELECT NAME FROM PROGRAMS";
            let pname = await db.basicQuery(query);
            let program_names = [];
            let flag = true;
            pname.map((el) => program_names.push(el.name));
            if (!program_names.includes(name)) {
                flag = false;
            }
            resolve(flag);
        } catch (error) {
            reject(false);
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

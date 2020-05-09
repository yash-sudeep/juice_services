var pg = require('pg');
var client;

const checkConnection = () => {
    return new Promise(async(resolve, reject) => {
        try {
            client = new pg.Client({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                database: process.env.DB_NAME,
                user: process.env.DB_USER,
                password: process.env.DB_PWD,
                ssl: {
                    rejectUnauthorized: false,
                }
            });
            await client.connect();
            console.log('Database Connection Successful');
            resolve(true);
        } catch (error) {
            reject(false);
        }
    });
};

const basicQuery = (query) => {
    return new Promise(async(resolve, reject) => {
        try {
            const res = await client.query(query);
            if (res.err) {
                console.log(res.err.stack);
                return res.err;
            }
            resolve(res.rows);
        } catch (error) {
            reject(error);
        }
    });
};

const parameterizedQuery = (query, values) => {
    return new Promise(async(resolve, reject) => {
        try {
            const res = await client.query(query, values);
            if (res.err) {
                console.log(res.err.stack);
                reject(res.err);
            }
            resolve(res.rows);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    basicQuery,
    parameterizedQuery,
    checkConnection
};
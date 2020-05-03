var pg = require('pg');
var config = require('./config/config.json');

const checkConnection = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const client = new pg.Client({
                host: config.host,
                port: config.port,
                database: config.database,
                user: config.user,
                password: config.password,
                ssl: {
                    rejectUnauthorized: false,
                }
            });
            await client.connect();
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
            await client.end();
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
            await client.end();
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
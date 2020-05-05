var pg = require('pg');
var client;

const checkConnection = () => {
    return new Promise(async(resolve, reject) => {
        try {
            client = new pg.Client({
                host: 'ec2-52-23-14-156.compute-1.amazonaws.com',
                port: 5432,
                database: 'd6leakc9cfvda',
                user: 'qhcellrvquatuc',
                password: 'b5afe83dc3c5f279a72ec4d6b5a917025a167ff94c9246885ae372bb77b1f9ee',
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
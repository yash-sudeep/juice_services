let accouuntID = process.env.OTP_ACCOUNT_ID ? process.env.OTP_ACCOUNT_ID : '';
let authToken = process.env.OTP_AUTH_TOKEN ? process.env.OTP_AUTH_TOKEN : '';
let serviceID = process.env.OTP_SERVICE_ID ? process.env.OTP_SERVICE_ID : '';

client = require("twilio")(
    accouuntID,
    authToken
);

const sendOtp = (phonenumber) => {
    return new Promise((resolve, reject) => {
        try {
            client.verify
                .services(serviceID)
                .verifications.create({
                    to: "+91" + phonenumber,
                    channel: "sms",
                })
                .then((data) => {
                    resolve(data);
                });
        } catch (error) {
            reject(error);
        }
    });
};

const verifyOtp = (phonenumber, otpcode) => {
    return new Promise((resolve, reject) => {
        try {
            if (phonenumber && otpcode.length === 6) {
                client.verify
                    .services(serviceID)
                    .verificationChecks.create({
                        to: "+91" + phonenumber,
                        code: otpcode,
                    })
                    .then((data) => {
                        resolve(data);
                    });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    sendOtp,
    verifyOtp
};
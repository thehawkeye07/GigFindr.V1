const nodemailer = require("nodemailer");
const { EMAIL_PASS } = process.env;

const createMailTransporter = () => {
	const transporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
			user: "gigfindr001@hotmail.com",
			pass: EMAIL_PASS,
		},
	});

	return transporter;
};

module.exports = { createMailTransporter };

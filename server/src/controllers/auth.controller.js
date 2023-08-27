const { User } = require("../models");
const { CustomException } = require("../utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const satelize = require("satelize");
const { JWT_SECRET, NODE_ENV } = process.env;
const saltRounds = 10;
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const userModel = require("../models/user.model");
const EmailVerificationToken = require("../models/emailVerificationToken");
// const { EMAIL, EMAIL_PASS } = process.env;

// console.log(process.env.NODE_ENV);

const authRegister = async (request, response) => {
	const { username, email, phone, password, image, isSeller, description } =
		request.body;

	const list =
		request.headers["x-forwarded-for"] || request.socket.remoteAddress;
	const ips = list.split(",");

	try {
		const hash = bcrypt.hashSync(password, saltRounds);

		// let { country } = satelize.satelize(
		//   { ip: ips[0] },
		//   (error, payload) => payload
		// );

		country = `India`;

		const user = new User({
			username,
			email,
			password: hash,
			emailToken: crypto.randomBytes(64).toString("hex"),
			image,
			//   country: country.en,
			country: country,
			description,
			isSeller,
			phone,
		});

		await user.save();

		let OTP = "";
		for (let i = 0; i <= 5; i++) {
			const randomVal = Math.round(Math.random() * 9);
			OTP += randomVal;
		}


        //SEDING EMAIL USING NODEMAILER

		// const newEmailVerificationToken = new EmailVerificationToken({
		// 	owner: user._id,
		// 	token: OTP,
		// });

		//await newEmailVerificationToken.save();

		// var transport = nodemailer.createTransport({
		// 	host: "sandbox.smtp.mailtrap.io",
		// 	port: 2525,
		// 	auth: {
		// 		user: "11075dcdfad5c1",
		// 		pass: "a6b3067a645c15",
		// 	},
		// });

		// transport.sendMail({
		// 	from: "verification@gigfindr.com",
		// 	to: email,
		// 	subject: "Email Verification",
		// 	html: `
        //         <p>Your verification OTP</p>
        //         <h1>${OTP}</h1>
        //     `,
		// });

		return response.status(201).send({
			error: false,
            OTP:OTP,
			message: "New user created!",
		});
	} catch ({ message }) {
		if (message.includes("E11000")) {
			return response.status(400).send({
				error: true,
				message: "Choose a unique username!",
			});
		}

		return response.status(500).send({
			error: true,
			message: "Something went wrong!",
		});
	}
};

const authLogin = async (request, response) => {
	const { username, password } = request.body;
	console.log(JWT_SECRET);
	console.log(process.env.JWT_SECRET);
	try {
		const user = await User.findOne({ username });
		if (!user) {
			throw CustomException("Check username or password!", 404);
		}

		const match = bcrypt.compareSync(password, user.password);
		if (match) {
			const { password, ...data } = user._doc;

			const token = jwt.sign(
				{
					_id: user._id,
					isSeller: user.isSeller,
				},
				JWT_SECRET,
				{ expiresIn: "7 days" }
			);

			const cookieConfig = {
				httpOnly: true,
				sameSite: NODE_ENV === "production" ? "none" : "strict",
				secure: NODE_ENV === "production",
				maxAge: 60 * 60 * 24 * 7 * 1000, // 7 days
				path: "/",
			};

			return response
				.cookie("accessToken", token, cookieConfig)
				.status(202)
				.send({
					error: false,
					message: "Success!",
					user: data,
				});
		}

		throw CustomException("Check username or password!", 404);
	} catch ({ message, status = 500 }) {
		return response.status(status).send({
			error: true,
			message,
		});
	}
};

const authLogout = async (request, response) => {
	return response
		.clearCookie("accessToken", {
			sameSite: "none",
			secure: true,
		})
		.send({
			error: false,
			message: "User have been logged out!",
		});
};

const authStatus = async (request, response) => {
	try {
		const user = await User.findOne({ _id: request.userID }).select(
			"-password"
		);

		if (!user) {
			throw CustomException("User not found!", 404);
		}

		return response.send({
			error: false,
			message: "Success!",
			user,
		});
	} catch ({ message, status = 500 }) {
		return response.status(status).send({
			error: true,
			message,
		});
	}
};

const verifyEmail = async (req, res) => {
	// try {
	// 	const emailToken = req.body.emailToken;

	// 	if (!emailToken) {
	// 		return res.status(404).json("Emailtoken not found");
	// 	}

	// 	const user = await userModel.findOne({ emailToken });

	// 	if (user) {
	// 		user.emailToken = null;
	// 		user.isVerified = true;

	// 		await user.save();

	// 		const token = createToken(user._id);

	// 		res.status(200).json({
	// 			_id: user._id,
	// 			name: user.username,
	// 			email: user.email,
	// 			token,
	// 			isVerified: user?.isVerified,
	// 		});
	// 	} else {
	// 		res.status(404).json("Email verification failed, invalid token!");
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// 	res.status(500).json(error.message);
	// }

    const {userId, OTP} = req.body;

};



module.exports = {
	authLogin,
	authLogout,
	authRegister,
	authStatus,
	verifyEmail,
};

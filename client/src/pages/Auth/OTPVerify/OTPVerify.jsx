import React, { useState } from "react";
import "./OTPVerify.scss";

function OTPVerify() {
	// const [otp, setOtp] = useState("");
	const [message, setMessage] = useState("");
	const [isVerified, setIsVerified] = useState(false);

    const {otp} = route.params; 

	// const handleOtpChange = (e) => {
	// 	const value = e.target.value;
	// 	if (/^[0-9]{0,6}$/.test(value)) {
	// 		setOtp(value);
	// 	}
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		// In a real application, you should send the OTP to a server for verification.
		// Here, we'll just compare it with a hardcoded OTP for demonstration purposes.
		const correctOtp = otp;

		if (otp === correctOtp) {
			setIsVerified(true);
			setMessage("OTP Verified!");
		} else {
			setIsVerified(false);
			setMessage("OTP Verification Failed. Please try again.");
		}
	};

    const retrieveOTP = () => {
        axios
    };

	return (
		<div className="otp-container">
			<h1>OTP Verification</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="otp">Enter OTP:</label>
					<input
						type="text"
						id="otp"
						name="otp"
						value={otp}
						onChange={handleOtpChange}
						maxLength="6"
						required
					/>
				</div>
				<button type="submit">Verify OTP</button>
			</form>
			{message && <p className={isVerified ? "success" : "error"}>{message}</p>}
		</div>
	);
}

export default OTPVerify;

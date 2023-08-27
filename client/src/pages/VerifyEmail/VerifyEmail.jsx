import React from "react";
import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
// import {Alert, CiccularProgress } from "@mui/material";

function VerifyEmail() {
	const { user, updateUser } = useContext();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const emailToken = searchParams.get("emailToken");

	console.log(user);

	useEffect(() => {
		async () => {
			if (user?.isVerified) {
				setTimeout(() => {
					return navigate("/");
				}, 3000);
			} else {
				if (emailToken) {
					//post request
					setIsLoading(true);

					const response = await postRequest(
                        `${baseUrl}/users/verify-email`,
                        JSON.stringify({emailToken})
                    );

                    setIsLoading(false);
                    console.log("res",response);

                    if(response.error){
                        return setError(response);
                    }

                    updateUser(response);
				}
			}
		};
	}, [emailToken, user]);

	return <div>VerifyEmail</div>;
}

export default VerifyEmail;

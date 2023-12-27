import React from "react";

const AutherText = ({ auther, date }: any) => {
	return (
		<h5 className="text-[#4C4C4C] mb-3 font-medium">
			By <span className="golden font-medium">{auther}</span>
			{date}
		</h5>
	);
};

export default AutherText;

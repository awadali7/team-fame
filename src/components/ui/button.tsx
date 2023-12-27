import React from "react";

const Button = ({ children, color }: any) => {
	return (
		<div className="cursor-pointer inline-block gradient-border-wrapper">
			<span
				className={`inline-block golden text-xl py-4 px-14 ${
					color ? `text-[${color}]` : "golden"
				} `}
			>
				{children}
			</span>
		</div>
	);
};

export default Button;

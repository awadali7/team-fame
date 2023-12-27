import React from "react";

const Input = ({ name, type, placeholder, isRequired }: any) => {
	return (
		<input
			className="border block w-full p-5 text-white text-white::placeholder text-lg mb-4  border-form-gray bg-transparent"
			type={type}
			placeholder={placeholder}
			name={name}
			required={isRequired}
		/>
	);
};

export default Input;

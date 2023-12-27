import React from "react";
import Input from "../ui/input";

const ContactForm = () => {
	return (
		<form action="/">
			<Input name="name" type="text" placeholder="Full Name" isRequired />
			<Input name="email" type="email" placeholder="Email" isRequired />
			<Input
				name="service"
				type="text"
				placeholder="Select the service requierd"
				isRequired
			/>
			<textarea
				className="border block w-full p-5 text-white text-white::placeholder text-lg mb-4  border-form-gray bg-transparent"
				name="message"
				rows={5}
				placeholder="Message"
			></textarea>

			<button
				className="bg-golden text-white block p-5 w-full text-lg font-medium"
				type="submit"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;

import ContactForm from "@/components/form/contact-form";

const ContactUs = () => {
	return (
		<section
			id="contact"
			className="py-32 bg-[url('/images/contact-bg.png')] bg-[#111010]  bg-cover bg-center bg-no-repeat"
		>
			<section className="wrapper flex justify-between">
				<h3 className="text-white text-4xl  mb-16  tracking-tighter">
					Contact Us
				</h3>
				<div className="w-3/5">
					<div className="text-white flex justify-between mb-2 bg-[#0A0A0A] p-14">
						<div className="w-[48%]">
							<h6 className="opacity-60 text-lg ">
								Working hours
							</h6>
							<hr className=" h-[1PX] opacity-10 bg-white mt-3 mb-5" />
							<span className="text-2xl font-medium inline-block mb-4">
								Monday To Friday <br />
								9:00 AM to 8:00 PM{" "}
							</span>
							<p className="opacity-60 text-lg">
								Our Support Team is available 24/7
							</p>
						</div>
						<div className="w-[48%]">
							<h6 className="opacity-60 text-lg ">Contact Us</h6>
							<hr className=" h-[1PX] opacity-10 bg-white my-5" />
							<span className="text-2xl font-medium inline-block mb-4">
								020 7993 2905
							</span>
							<p className="opacity-60 text-lg">
								hello@teamfame.com
							</p>
						</div>
					</div>

					<div className="bottom">
						<ContactForm />
					</div>
				</div>
			</section>
		</section>
	);
};

export default ContactUs;

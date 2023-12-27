import React from "react";

const AboutUs = () => {
	return (
		<section
			id="about"
			className="bg-[url('/images/about-bg.png')] bg-black  bg-cover bg-center bg-no-repeat"
		>
			<section className="wrapper">
				<div className="flex justify-between bg-[#0A0A0A] bg-opacity-50 px-24 py-32 text-white">
					<div className="w-[48%]">
						<h5 className="text-lg tracking-widest mb-5 ">
							ABOUT US
						</h5>
						<h3 className="text-4xl tracking-tighter w-10/12 mb-8">
							Team Fame: Your Business Partner for Seamless
							Success
						</h3>
						<p className="text-lg text-[#C3C4C7]">
							Team Fame: Your turn-key business partner in the
							UAE, specializing in Mainland and Free-Zone setups,
							along with our All-Inclusive Freelancer VISA package
							for seamless and efficient business solutions.
						</p>
					</div>
					<div className="w-[48%]">
						<h5 className="text-lg tracking-widest mb-5 ">
							OUR MISSION
						</h5>
						<h3 className="text-4xl tracking-tighter w-10/12 mb-8">
							Creating valuable content for creatives all around
							the world
						</h3>
						<p className="text-lg text-[#C3C4C7]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>
				</div>
				<div className="line">
					<div className="w-3/4 h-6 bg-golden m-auto"></div>
				</div>
			</section>
		</section>
	);
};

export default AboutUs;

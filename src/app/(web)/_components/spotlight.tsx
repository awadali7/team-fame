import Button from "@/components/ui/button";
import React from "react";

const Spotlight = () => {
	return (
		<section
			id="hero"
			className="bg-[url('/images/hero-one.jpg')] bg-cover bg-center bg-no-repeat h-screen-minus-100"
		>
			<section className="wrapper flex   items-center h-full ">
				<div className="w-2/4  font-light	">
					<h1 className="text-6xl	text-white uppercase mb-8">
						Setting up your business in{" "}
						<span className="golden  font-light	">Dubai</span>
					</h1>
					<p className="text-white text-lg mb-14">
						Lorem ipsum irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident.
					</p>
					<Button children="Explore" />
				</div>
			</section>
		</section>
	);
};

export default Spotlight;

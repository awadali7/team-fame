import BigCard from "@/components/ui/big-card";
import Card from "@/components/ui/card";

import React from "react";

const BusinessSetup = () => {
	return (
		<section id="business-setup" className="bg-[#0A0A0A] py-32">
			<section className="wrapper">
				<h3 className="text-white text-4xl text-center mb-16  tracking-tighter">
					Business setup
				</h3>
				<div className="flex justify-between">
					<div className="w-2/5">
						<BigCard />
					</div>
					<div className="w-[59%] flex flex-col justify-between">
						<Card image="/images/business-setup-one.png" />
						<Card image="/images/business-setup-two.png" />
					</div>
				</div>
			</section>
		</section>
	);
};

export default BusinessSetup;

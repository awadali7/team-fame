import Image from "next/image";
import React from "react";

const BigCard = () => {
	return (
		<div className="gradient-border-wrapper ">
			<div>
				<Image
					alt="Logo"
					width={100}
					height={100}
					layout="responsive"
					src="/images/business-setup-one.png"
				/>
			</div>
			<div className="text-white p-5">
				<h5 className="text-3xl tracking-tighter mb-3 font-medium">
					Mainland
				</h5>
				<div className="flex items-center justify-between text-lg">
					<p className="w-3/4">
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit.
					</p>
					<div className="w-10">
						<Image
							alt="Logo"
							width={100}
							height={100}
							layout="responsive"
							src="/images/icons/arrow.svg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigCard;

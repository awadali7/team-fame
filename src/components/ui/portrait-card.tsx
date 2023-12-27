import Image from "next/image";
import React from "react";

const PortraitCard = ({ image }: any) => {
	return (
		<div className="w-[31.5%] relative">
			<div className="image-container">
				<Image
					alt="Logo"
					width={100}
					height={100}
					layout="responsive"
					src={image}
				/>
			</div>
			<div className="bg-[#0A0A0A] bg-opacity-50 absolute bottom-0 text-white   text-center w-full">
				<h4 className="text-3xl p-4 border-b-2 border-[#595858] tracking-wide">
					Tourist/Visitor Visa
				</h4>
				<h6 className="p-4 tracking-wide">EXPLORE</h6>
			</div>
		</div>
	);
};

export default PortraitCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menu_ourservice } from "@/app/(web)/data/our-service";

const OurService = () => {
	return (
		<section
			id="service"
			className="bg-[#111010] border-gradient-top border-gradient-bottom py-32"
		>
			<section className="wrapper">
				<h3 className="text-4xl text-white text-center mb-16">
					Our Service
				</h3>
				<div className="flex justify-between flex-wrap gap-8">
					{menu_ourservice.map((service: any) => (
						<div
							className={`${
								service.bg_image
									? "bg-[url('/images/sky-line.png')]"
									: ""
							} bg-auto  bg-bottom bg-no-repeat text-white bg-[#0a0a0a] border-custom-gray w-[31.5%] border-2 p-10`}
						>
							<div className="w-14 mb-6">
								<Image
									alt="Logo"
									width={100}
									height={100}
									layout="responsive"
									src={
										service.image
											? service.image
											: "/images/icons/arrow.svg"
									}
								/>
							</div>
							<h5 className="text-4xl mb-4">
								{service.name ? service.name : "--"}
							</h5>
							<p className="text-lg mb-4">
								{service.comment ? service.comment : "--"}
							</p>
							<Link
								className="golden text-right w-full inline-block font-medium text-lg"
								href={service.link ? service.link : "/"}
							>
								Learn more
							</Link>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};

export default OurService;

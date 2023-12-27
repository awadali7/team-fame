import Image from "next/image";

const Card = ({ image }: any) => {
	return (
		<div className="flex  justify-between">
			<div className=" flex items-center gradient-border-wrapper">
				<div className="w-[500px] h-[260px] overflow-hidden">
					<Image
						alt="Logo"
						width={100}
						height={100}
						layout="responsive"
						src={image}
					/>
				</div>
				<div className="flex h-full items-center p-5">
					<div className="text-white ">
						<h5 className="text-3xl tracking-tighter mb-3 w-full font-medium">
							Mainland
						</h5>
						<div className="flex items-center justify-between w-full text-lg">
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit.
							</p>
						</div>
					</div>
					<div className="w-20 h-full flex items-end">
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

export default Card;

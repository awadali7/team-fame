import PortraitCard from "@/components/ui/portrait-card";
import Image from "next/image";

const Holidays = () => {
	return (
		<section id="holiday" className="bg-[#0A0A0A] py-32">
			<section className="wrapper">
				<h3 className="text-4xl text-white text-center mb-5">
					Holidays
				</h3>
				<p className="text-lg  text-white text-center mb-16">
					Wide range options for any lifestyle. Make your choice with
					us
				</p>
				<div className="flex justify-between">
					<PortraitCard image="/images/holiday-one.png" />
					<PortraitCard image="/images/holiday-two.png" />
					<PortraitCard image="/images/holiday-three.png" />
				</div>
			</section>
		</section>
	);
};

export default Holidays;

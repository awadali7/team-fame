import Header from "@/components/header";
import Image from "next/image";
import Spotlight from "./_components/spotlight";
import AboutUs from "./_components/about-us";
import BusinessSetup from "./_components/business-setup";
import OurService from "./_components/our-service";
import Holidays from "./_components/holidays";
import Blog from "./_components/blog";
import ContactUs from "./_components/contact-us";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<>
			<Header />
			<Spotlight />
			<AboutUs />
			<BusinessSetup />
			<OurService />
			<Holidays />
			<Blog />
			<ContactUs />
			<Footer />
		</>
	);
}

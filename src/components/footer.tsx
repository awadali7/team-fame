import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<section id="footer" className="bg-[#0A0A0A] py-14">
			<section className="wrapper flex justify-between">
				<ul className="flex justify-between  w-[52%]">
					<li className="text-[#595858] text-lg">
						© 2024 company name. All rights reserved.
					</li>
					<li>
						<Link className="text-[#595858] text-lg" href="#">
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link className="text-[#595858] text-lg" href="#">
							Terms of Use
						</Link>
					</li>
					<li>
						<Link className="text-[#595858] text-lg" href="#">
							Sitemap
						</Link>
					</li>
				</ul>
				<ul className="w-[12%] flex justify-between">
					<li>
						<Link href="#">
							<Image
								alt="Logo"
								width={100}
								height={100}
								layout="responsive"
								src={"/images/icons/twitter-icon.svg"}
							/>
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image
								alt="Logo"
								width={100}
								height={100}
								layout="responsive"
								src={"/images/icons/linkdin-icon.svg"}
							/>
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image
								alt="Logo"
								width={100}
								height={100}
								layout="responsive"
								src={"/images/icons/facebook-icon.svg"}
							/>
						</Link>
					</li>
					<li>
						<Link href="#">
							<Image
								alt="Logo"
								width={100}
								height={100}
								layout="responsive"
								src={"/images/icons/github-icon.svg"}
							/>
						</Link>
					</li>
				</ul>
			</section>
		</section>
	);
};

export default Footer;

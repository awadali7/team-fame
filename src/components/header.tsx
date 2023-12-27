import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="h-24	blacked sticky top-0 z-10">
			<section className="wrapper h-full flex justify-between items-center">
				<h1 className="w-40	">
					<Link href="#" className="inline-block">
						<Image
							src="./images/logo.svg"
							alt="Logo"
							width={100}
							height={100}
							layout="responsive"
						/>
					</Link>
				</h1>
				<nav className="w-4/12">
					<ul className="flex justify-between">
						<li>
							<Link
								href="#hero"
								className="text-golden text-lg font-medium cursor-pointer"
							>
								Home
							</Link>
						</li>

						<li>
							<Link
								href="#about"
								className="text-golden text-lg font-medium cursor-pointer"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="#service"
								className="text-golden text-lg font-medium cursor-pointer"
							>
								Our services
							</Link>
						</li>
						<li>
							<Link
								href="#blog"
								className="text-golden text-lg font-medium cursor-pointer"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="#contact"
								className="text-golden text-lg font-medium cursor-pointer"
							>
								Contact us
							</Link>
						</li>
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Header;

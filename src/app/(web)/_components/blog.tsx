import AutherText from "@/components/ui/auther-date";
import Button from "@/components/ui/button";
import Image from "next/image";

const Blog = () => {
	return (
		<section
			id="blog"
			className="border-gradient-bottom bg-[#111010] py-32 "
		>
			<section className="wrapper">
				<div className="flex justify-between">
					<div className="w-[55%] ">
						<h3 className="text-4xl text-white mb-16">Blog</h3>
						<div className="pl-10">
							<Image
								alt="Logo"
								width={100}
								height={100}
								layout="responsive"
								src="/images/blog.png"
								className="mb-10"
							/>
							<AutherText
								auther="John Doe"
								date="   l   Aug 23, 2021"
							/>
							<p className="text-white my-8 text-3xl tracking-normal">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor.
							</p>
							<p className="text-[#6D6E76] mb-8 text-lg">
								Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat
								cupidatat non proident.
							</p>
							<Button children="Read More >" color="#fffff" />
						</div>
					</div>
					<div className="w-[40%]">
						<div className="flex justify-between items-center mb-16">
							<h3 className="text-4xl text-white ">All Blogs</h3>
							<span className="golden text-lg cursor-pointer">
								View All
							</span>
						</div>
						<div className="scroll">
							<div className="p-8 pt-0 ">
								<AutherText
									auther="John Doe"
									date="   l   Aug 23, 2021"
								/>
								<p className="text-white text-3xl tracking-normal">
									8 Figma design systems that you can download
									for free today.
								</p>
							</div>
							<div className="p-8 ">
								<AutherText
									auther="John Doe"
									date="   l   Aug 23, 2021"
								/>
								<p className="text-white text-3xl tracking-normal">
									8 Figma design systems that you can download
									for free today.
								</p>
							</div>
							<div className="p-8 gradient-border-wrapper">
								<AutherText
									auther="John Doe"
									date="   l   Aug 23, 2021"
								/>
								<p className="text-white text-3xl tracking-normal">
									8 Figma design systems that you can download
									for free today.
								</p>
							</div>
							<div className="p-8 ">
								<AutherText
									auther="John Doe"
									date="   l   Aug 23, 2021"
								/>
								<p className="text-white text-3xl tracking-normal">
									8 Figma design systems that you can download
									for free today.
								</p>
							</div>
							<div className="p-8 ">
								<AutherText
									auther="John Doe"
									date="   l   Aug 23, 2021"
								/>
								<p className="text-white text-3xl tracking-normal">
									8 Figma design systems that you can download
									for free today.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Blog;

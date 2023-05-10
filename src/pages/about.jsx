import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import img from "../assets/img.jpg";
import Icons from "../components/Icons";
import { aboutCardDetails, aboutPraveen, bio } from "../assets/constants";
import Link from "next/link";

const About = () => {
	return (
		<Layout>
			<div className="border border-blue-600 my-5 px-10 py-6 flex flex-col sm:flex-row items-center justify-between">
				<Image
					width={"100"}
					height={"100"}
					src={img}
					alt="profile image"
					className="rounded-full h-[10rem] w-[10rem] object-cover"
				/>
				<div className="flex flex-col ">
					<h1 className="text-[2rem]">
						Praveen Kumar <br /> Potturi
					</h1>
					<Icons />
				</div>
				<ul>
					{aboutCardDetails.map((i, index) => (
						<li
							className=" mb-5"
							key={index}>
							<p className="text-[12px] text-gray-400">{i[0]}</p>
							<h1 className="text-[12px]">{i[1]}</h1>
						</li>
					))}
				</ul>
			</div>
			<div className="flex justify-between mt-8 ">
				{/* LEFT SIDE  */}
				<div className="my-4">
					<Link
						href={"/"}
						className=" mb-2 ">
						About Praveen
					</Link>
					<ul className="flex flex-col gap-2 ">
						<li>
							<Link href={"/"}>{"↳ Biography"}</Link>
						</li>
						<li>
							<Link href={"/"}>{"↳ Education"}</Link>
						</li>
						<li>
							<Link href={"/"}>{"↳ Work"}</Link>
						</li>
						<li>
							<Link href={"/"}>{"↳ Open Source Contributions"}</Link>
						</li>
						<li>
							<Link href={"/"}>{"↳ Community"}</Link>
						</li>
					</ul>
				</div>

				{/* RIGHT SIDE */}
				<div className="w-[70%] bg-black my-4">
					{aboutPraveen.map((i) => (
						<div
							key={"i"}
							id={i.ref}>
							<h1 className="text-[2rem]">{i.title} </h1>
							<p className="text-sm">{i.desc}</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default About;

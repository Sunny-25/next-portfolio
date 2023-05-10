import Link from "next/link";
import React from "react";
import Icons from "../components/Icons";

const Footer = () => {
	return (
		<div className=" h-20 lg:px-[30vw] px-20 text-white bg-black flex flex-col sm:flex-row justify-between items-center">
			<div>
				<h1>
					{`© 2023 Praveen Kumar Potturi. `}
					<Link
						href={"/"}
						className="text-blue-600">
						About this website.
					</Link>
				</h1>
			</div>
			<Icons />
		</div>
	);
};

export default Footer;

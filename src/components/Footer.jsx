import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className=" h-20 px-20 text-white bg-black flex flex-row justify-between items-center">
			<div>
				<h1>
					© 2023 Praveen Kumar Potturi.
					<Link href={"/"} className="text-blue-600">
						About this website.
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default Footer;

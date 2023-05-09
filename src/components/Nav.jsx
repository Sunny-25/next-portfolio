import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div className="flex gap-3 text-white bg-[#5651FF] flex-col sm:flex-row justify-center sm:justify-between items-center px-20 py-2 ">
			<Link href={"/"} className="text-lg">
				{`< Praveen/ >`}
			</Link>
			<div className="flex gap-2">
				<Link href={"/"}>{`<home>`}</Link>
				<Link href={"/about"}>{`<about>`}</Link>
				<Link href={"/projects"}>{`<projects>`}</Link>
			</div>
		</div>
	);
};

export default Nav;

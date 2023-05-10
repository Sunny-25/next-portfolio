import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Nav = () => {
	const { pathname } = useRouter();

	return (
		<div className="flex gap-3 text-white bg-[#5651FF] px-20 lg:px-[30vw] flex-col sm:flex-row justify-center sm:justify-between items-center  py-2 ">
			<Link
				href={"/"}
				className="text-lg font-bold">
				{`< Praveen/ >`}
			</Link>
			<div className="flex gap-4">
				<Link
					className={pathname == "/" ? "font-bold text-white" : "text-gray-300"}
					href="/">{`<home>`}</Link>
				<Link
					className={pathname == "/about" ? "font-bold text-white" : "text-gray-300"}
					href="/about">{`<about>`}</Link>
				<Link
					className={pathname == "/projects" ? "font-bold text-white" : "text-gray-300"}
					href="/projects">{`<projects>`}</Link>
				<Link
					className={pathname == "/blog" ? "font-bold text-white" : "text-gray-300"}
					href="/blog">{`<blog>`}</Link>
			</div>
		</div>
	);
};

export default Nav;

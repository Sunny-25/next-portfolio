import Link from "next/link";
import React from "react";
import { homePageIcons } from "../assets/icons";

const Icons = () => {
	return (
		<ul className="flex gap-4 my-2">
			{homePageIcons.map(({ link, icon }) => (
				<li key={icon}>
					<Link
						className="text-blue-500 text-lg"
						href={link}>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Icons;

import Link from "next/link";
import React from "react";
import { homePageIcons } from "../assets/icons";

const Icons = () => {
	return (
		<ul className="flex gap-4 my-2">
			{homePageIcons.map((i) => (
				<li key={i}>
					<Link href={i.link}>{i.icon}</Link>
				</li>
			))}
		</ul>
	);
};

export default Icons;

import React from "react";

const ProjectCard = ({ pro }) => {
	return (
		<div className="flex flex-col px-6 py-2">
			<h1 className="text-[2rem] font-bold">{pro.title}</h1>
			<p>{pro.desc}</p>
			Icons
		</div>
	);
};

export default ProjectCard;

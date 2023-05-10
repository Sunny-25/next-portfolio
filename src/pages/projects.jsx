import React from "react";
import Layout from "@/components/Layout";
import { projectsData } from "../assets/constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
	return (
		<Layout>
			<div className="min-h-full">
				<h1 className=" mt-5 text-[2rem]">Projects</h1>
				<p className="text-[.75rem]">{"Projects that I've worked on so far"}</p>
				<div className="grid grid-cols-2 gap-4  overflow-auto mt-8">
					{projectsData.map((i, index) => (
						<div
							key={index}
							className=" border border-blue-600 grid place-content-center h-[12rem]">
							<ProjectCard pro={i} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Projects;

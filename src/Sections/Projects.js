import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
	return (
		<div className="Projects">
			{
				// eslint-disable-next-line
				<a className="anchor" id="Projects" />
			}
			<h2 className="projects-title">
				<span className="dark-accent">&#123;</span>P
				<span className="dark-accent">&#125;</span>
				rojects
				<span className="dark-accent">.</span>
			</h2>
			{/* <h2 className="projects-title">Projects</h2> */}
			<ul className="projects">
				<ProjectCard />
				<div className="project-placeholder" />
				<div className="project-placeholder" />
				<ProjectCard />
				<ProjectCard />
				<div className="project-placeholder" />
				<div className="project-placeholder" />
				<ProjectCard />
			</ul>
		</div>
	);
};

export default Projects;

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
				<ProjectCard
					title="Network Booting & Latency Analysis"
					description="The goal of this project is to create a program capable of automating the process of booting computers and running diagnostics, BIOS checks, and sample boot programs like trading algorithms that run in a standardized fashion across the network.

					The other primary goal is to create a system to monitor the network latency by monitoring the time to boot for each computer connected to the network. This system monitoring is useful as it helps HFT firms maintain the integrity and reliability of their systems by checking for nonuniformity during boot time."
					tags={["C/C++", "Linux", "Scripting","Vagrant", "Dev OPs"]}
				/>
				{/* <div className="project-placeholder" />
				<div className="project-placeholder" /> */}
				<ProjectCard
					title="Eventbook"
					description="Eventbook is a social media platform that allows users to create and share events with their friends. Users can create events, invite friends, and share photos and videos from the event. Eventbook is a full-stack web application built using React, Node.js, Express, and MongoDB."
					tags={[
						"React.js",
						"Node.js",
						"Express.js",
						"MongoDB",
						"Databases",
						"Full-Stack",
					]}
					right
				/>
				<ProjectCard
					title="Emotify"
					description="Emotify uses computer vision to detect a user's current emotion and suggests songs to listen to based of the users current mood"
					tags={[
						"Python",
						"OpenCV",
						"Tensorflow",
						"Flask",
						"React.js",
						"RestAPI",
					]}
				/>
				{/* <div className="project-placeholder" />
				<div className="project-placeholder" /> */}
				<ProjectCard
					title="Photomosaic Generator"
					description="This is a CLI based photomoasic generator that takes in a target image and a directory of images to use as tiles and generates a photomosaic of the target image using the tiles provided."
					tags={["C/C++", "Scripting", "Algorithms"]}
					right
				/>
			</ul>
		</div>
	);
};

export default Projects;

import React from "react";

const ProjectCard = ({
	title = "empty card",
	description = "this is a short description for an empty card",
	collapse = "this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.this is a long description for an empty card.",
	tags = ["empty tag", "empty tag", "empty tag", "empty tag", "empty tag"],
}) => {
	return (
		<div className="ProjectCard">
			<h4 className="project-card-title">{title}</h4>
			<p className="project-card-description">{description}</p>
			<div className="project-card-collapse">{collapse}</div>
			<ul className="project-card-tags">
				{tags.map((tag, index) => {
					return (
						<li key={index} className="project-card-tag">
							{tag}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProjectCard;

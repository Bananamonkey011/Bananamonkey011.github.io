import React from "react";


const ExperienceCard = () => {
	return (
		<div className="ExperienceCard">
			<h4 className="experience-card-title">OSF HealthCare</h4>
			<p className="experience-card-description">
				Created a blockchain based trust-less system to help healthcare
				researchers access data in a differentially private manner.{" "}
			</p>
			<ul className="experience-card-tags">
				<li className="experience-card-tag">React.js</li>
				<li className="experience-card-tag">Node.js</li>
				<li className="experience-card-tag">Solidity</li>
				<li className="experience-card-tag">AWS</li>
				<li className="experience-card-tag">SQL</li>
			</ul>
		</div>
	);
};

export default ExperienceCard;

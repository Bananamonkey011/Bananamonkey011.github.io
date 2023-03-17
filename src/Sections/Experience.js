import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import { useParallax } from "react-scroll-parallax";

const Experience = () => {
	const easingcurve = [0.1, 1, 1, 0.1];
	const { ref } = useParallax({
		translateY: [70, -60],
		easing: easingcurve,
	});
	return (
		<div className="Experience">
			<h2 className="experience-title">
				<span className="accent">&#123;</span>E
				<span className="accent">&#125;</span>
				xperience
				<span className="accent">.</span>
			</h2>

			<div className="experiences" ref={ref}>
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</div>
	);
};

export default Experience;

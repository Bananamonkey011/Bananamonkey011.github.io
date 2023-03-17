import React from "react";
import { useParallax } from "react-scroll-parallax";

const About = () => {
	const easingcurve = [0.1, 1, 1, 0.1];
	const {ref: parallaxLeft} = useParallax ({
		translateX: [-100, 85],
		opacity: [2, 0],
		easing: easingcurve,
	});

	const {ref: parallaxRight} = useParallax({
		translateX: [100, -85],
		opacity: [2, 0],
		easing: easingcurve,
	});

	return (
		<div className="About">
			<div ref={parallaxLeft}>

				<h2 className="about-introduction">
					<span className="accent2">&#123;</span>A
					<span className="accent2">&#125; </span>
					Little More About Me
					<span className="accent2">:</span>
				</h2>

			</div>
			<div ref={parallaxRight}>

				<p className="about-description">
					I’m currently a student at the University of Illinois
					Urbana-Champaign studying Computer-Science + Economics. I
					love working with groundbreaking tech want to explore it’s
					use in as many domains as possible. I aspire to meet new
					people of various backgrounds and learn from their
					experiences. I will never back down from a challenge.
				</p>

			</div>
		</div>
	);
};

export default About;

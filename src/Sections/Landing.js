import React from "react";
import { Fade } from "react-reveal";
import { Parallax } from "react-scroll-parallax";
import WebPortrait from "../Components/WebPortrait";

const Landing = () => {
	return (
		<>
			{
				// eslint-disable-next-line
				<a className="anchor" id="Landing" />
			}
			<div className="Landing">
				<Parallax className="landing-img-parallax-wrapper" speed={20}>
					<Fade left>
						<WebPortrait />
					</Fade>
				</Parallax>
				<Parallax className="landing-text-parallax-wrapper" speed={30}>
					<Fade right cascade>
						<div className="landing-text">
							<h3
								style={{ color: "white" }}
								className="landing-introduction"
							>
								Hi, My Name Is
							</h3>
							<h1 className="landing-name">
								<span className="accent">&#123;</span>M
								<span className="accent">&#125;</span>
								anan
								<span className="accent">.</span>
							</h1>
							<h4 className="landing-role">
								<span className="accent">&#123;</span>
								Student
								<span className="accent"> x </span>
								Software Engineer
								<span className="accent">&#125;</span>
							</h4>
						</div>
					</Fade>
				</Parallax>
			</div>
		</>
	);
};

export default Landing;

import React from "react";
import {
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialGithub,
} from "react-icons/sl";
import { Fade } from "react-reveal";
import HueSlider from '../Components/HueSlider';

const SocialMedia = () => {
	return (
		<div className="SocialMedia">
			<Fade left cascade>
				<a
					className="social-media-icon"
					href="https://github.com/Bananamonkey011"
				>
					<SlSocialGithub />
				</a>
				<a
					className="social-media-icon"
					href="https://www.instagram.com/why_is_manan/"
				>
					<SlSocialInstagram />
				</a>
				<a
					className="social-media-icon"
					href="https://www.linkedin.com/in/manan-jain0416/"
				>
					<SlSocialLinkedin />
				</a>
				<HueSlider/>
				<div className="slider">wassup</div>
			</Fade>
		</div>
	);
};

export default SocialMedia;

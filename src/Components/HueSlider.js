import React from "react";
import { useState, useEffect } from "react";
import { Slider } from "antd";

const HueSlider = () => {
	const [hue, setHue] = useState(189);

	useEffect(() => {
		document.querySelector(":root").style.setProperty("--hue", hue);
		console.log(hue);
	}, [hue]);

	return (
		<div className="slider-container">
			{/* <p>Try Changing Me!</p> */}
			<Slider
				min={0}
				max={360}
				value={hue}
				className="slider"
				onChange={(value) => {
					setHue(value);
				}}
				railStyle={{
					background: 'var(--accent)',
					// eslint-disable-next-line
					background:
						"linear-gradient( 90deg, hsl(0, 100%, 69%) 0%,hsl(36, 100%, 69%) 10%,hsl(72, 100%, 69%) 20%,hsl(108, 100%, 69%) 30%,hsl(144, 100%, 69%) 40%,hsl(180, 100%, 69%) 50%,hsl(216, 100%, 69%) 60%,hsl(252, 100%, 69%) 70%,hsl(288, 100%, 69%) 80%,hsl(324, 100%, 69%) 90%,hsl(360, 100%, 69%) 100%)",
				}}
				trackStyle={{background: "transparent"}}
			/>
		</div>
	);
};

export default HueSlider;

import React from "react";
import Portrait from "../Assets/MananWebPortrait.png";
import WhiteBG from "../Assets/WhiteBG.svg";
const WebPortrait = () => {
	return (
		<div className="svg-container">
			<img src={WhiteBG} alt='white-bg' className="landing-white-bg" />
			<svg
				className="landing-color-bg"
				viewBox="0 0 1635 2589"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				// width="1635px"
				// height="2589px"
			>
				<path
					className="svg-path"
					fill-rule="evenodd"
					fill="currentColor"
					d="M1307.0,736.999 C1477.448,748.213 1887.442,2049.912 1411.999,2304.0 C1203.520,2415.416 862.439,1920.342 728.0,1901.999 C593.560,1883.657 373.430,1933.540 315.999,2104.999 C262.116,2265.872 318.675,2695.746 85.999,2562.999 C2.185,2515.181 0.0,2532.999 0.0,2532.999 L0.999,0.0 C0.999,0.0 96.88,78.268 216.689,357.157 C337.290,636.45 490.177,502.199 569.781,613.51 C649.384,723.904 634.771,943.845 779.890,926.114 C925.8,908.382 1137.486,725.847 1307.0,736.999 Z"
				/>
			</svg>
			<img
				className="landing-portrait"
				style={{ position: "absolute" }}
				src={Portrait}
				alt="portrait"
			/>
		</div>
	);
};

export default WebPortrait;

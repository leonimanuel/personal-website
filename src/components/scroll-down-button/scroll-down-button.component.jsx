import React from "react";
import "./scroll-down-button.styles.css";

import DownArrow from "./down-arrow-icon.svg";


const ScrollDownButton = () => {
// 	const scrollDown = () => {
		
// 	}
	return (
		<div className="scroll-down-button">
			<img src={DownArrow} alt=""/>
		</div>
	);
};

export default ScrollDownButton;

			// onClick={document.getElementByClassName('skill-name').scrollIntoView()}>

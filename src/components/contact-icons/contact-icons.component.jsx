import React from "react";
import "./contact-icons.styles.css";

// import CvIcon from "./cv-icon.png"
import PhoneIcon from "./phone-icon.svg"
import EmailIcon from "./email-icon.svg"
import CvIcon from "./cv-icon.svg"
import LinkedinIcon from "./linkedin-icon.svg"
import GithubIcon from "./github-icon.svg"

import CvDoc from "./cv-doc.pdf"


const ContactIcons = () => (
	<div className="icons-container">
		<div className="icon-box" id="phone-icon">
			<img className="contact-icon" src={PhoneIcon} alt=""/>
		</div>
		<div className="icon-box">
			<a target="_blank" rel="noopener noreferrer" href="mailto:leonmalisov@gmail.com" >
				<img className="contact-icon" src={EmailIcon} alt=""/>
			</a>	
		</div>
		<div className="icon-box">
			<a target="_blank" rel="noopener noreferrer" href={CvDoc}>
				<img className="contact-icon" src={CvIcon} alt=""/>
			</a>
		</div>
		<div className="icon-box">
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leon-malisov-6744b776/">
				<img className="contact-icon" src={LinkedinIcon} alt=""/>
			</a>		
		</div>
		<div className="icon-box">
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/leonimanuel">
				<img className="contact-icon" src={GithubIcon} alt=""/>
			</a>
		</div>
	</div>
);

export default ContactIcons;

		// <img src={CvIcon} alt=""/>
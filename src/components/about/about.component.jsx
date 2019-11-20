import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./about.styles.css";

import ProfilePic from './profile-pic.jpg'
import FastIcon from "./fast-icon.png";
import ResponsiveIcon from "./responsive-icon.png";
import EngagingIcon from "./engaging-icon.svg";
import ScalableIcon from "./scalable-icon.svg";

import ScrollDownButton from "../scroll-down-button/scroll-down-button.component"




const About = () => (
	<div className="about-page">
		<h1 className="about-header">About Me</h1>
		<div className="about-content">
		
			<div className="about-pic-and-text">
				<img className="profile-pic" src={ProfilePic} alt="" width="300" height=""/>
				<div className="about-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
			
			<div className="qualities-container">
				<div className="qualities-group1">
					<div className="quality-box">
						<img className="quality-pic" src={EngagingIcon} alt=""/>
						<h3 className="quality-header">Engaging</h3>
						<div className="quality-text">Lorem ipsum dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
					</div>
					<div className="quality-box">
						<img className="quality-pic" src={ScalableIcon} alt=""/>
						<h3 className="quality-header">Responsive</h3>
						<div className="quality-text">Lorem ipsum dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
					</div>
				</div>
				
				<div className="qualities-group2">
					<div className="quality-box">
						<img className="quality-pic" src={ScalableIcon} alt=""/>
						<h3 className="quality-header">Fast</h3>
						<div className="quality-text">Lorem ipsum dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
					</div>
					<div className="quality-box">
						<img className="quality-pic" src={EngagingIcon} alt=""/>
						<h3 className="quality-header">Scalable</h3>
						<div className="quality-text">Lorem ipsum dolor Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>
					</div>
				</div>
				
			</div>
		</div>
		<Link activeClass="active"
      to="skills-page"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}>
			<ScrollDownButton />
    </Link>
	</div>
);

export default About;

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./about.styles.css";

import ProfilePic from './profile-pic.jpg'
import ResponsiveIcon from "./responsive-icon.svg";
import EngagingIcon from "./engaging-icon.svg";
import ScalableIcon from "./scalable-icon.svg";
import Hexagon from "./hexagon-icon.png"
import FastIcon from "./fast-icon.svg"

import ScrollDownButton from "../scroll-down-button/scroll-down-button.component"




const About = ({offsetVal}) => (
	<div className="about-page page">
		<h1 className="about-header page-header">About Me</h1>
		<div className="about-content">
			<div className="about-pic-and-text">
				<img className="profile-pic" src={ProfilePic} alt="" height=""/>
				<div className="about-text">
					Self-taught | NYC-based <br /> <br />
					Developer with a passion for clean, engaging and accesible web design.
					I make intuitive websites that keep up effortlessly with ideas as they grow in scale and in ambition.
					I specialize in React, Node, and online security. <br /> <br />
					I can get you where you want to go.


				</div>
			</div>
			<div className="about-divider"></div>
			<div className="qualities-container">
				<div className="qualities-group1">
					<div className="quality-box">
						<div className="quality-image">
							<img className="quality-pic" src={Hexagon} alt=""/>
							<img className="quality-icon" src={EngagingIcon} alt=""/>
						</div>
						
						<h3 className="quality-header">Engaging</h3>
						<div className="quality-text">Design that turns your website into not just a destination, but an experience </div>
					</div>
					<div className="quality-box">
						<div className="quality-image">
							<img className="quality-pic" src={Hexagon} alt=""/>
							<img className="quality-icon" src={ResponsiveIcon} alt=""/>
						</div>
						<h3 className="quality-header">Responsive</h3>
						<div className="quality-text">Websites and web-apps that work on any screen, big or small</div>
					</div>
				</div>
				
				<div className="qualities-group2">
					<div className="quality-box">
						<div className="quality-image">
							<img className="quality-pic" src={Hexagon} alt=""/>
							<img className="quality-icon" src={FastIcon} alt=""/>
						</div>
						<h3 className="quality-header">Fast</h3>
						<div className="quality-text">From front-end to back, everything is optimized to make sure content loads ASAP</div>
					</div>
					<div className="quality-box">
						<div className="quality-image">
							<img className="quality-pic" src={Hexagon} alt=""/>
							<img className="quality-icon" src={ScalableIcon} alt=""/>
						</div>
						<h3 className="quality-header">Scalable</h3>
						<div className="quality-text">Built to grow from the ground up. Infinitely scalable and effortlessly readable</div>
					</div>
				</div>
				
			</div>
		</div>
		<Link activeClass="active"
      to="skills-page"
      spy={true}
      smooth={true}
      offset={offsetVal}
      duration={500}>
			<ScrollDownButton />
    </Link>
	</div>
);

export default About;

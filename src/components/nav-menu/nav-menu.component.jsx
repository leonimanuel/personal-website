import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./nav-menu.styles.css"

const SmallNav = ({offsetVal}) => {
	const snapMenuBack = () => {
		document.getElementById("app-container").className = "app-container";
	};

	return ( 
	<nav className="small-nav-items" id="small-nav-wrapper" style={{"borderBottom": "0px solid red", "transition": "0.2s ease"}}>
				<div className="small-menu-box">
					<Link activeClass="active"
				      to="home-page"
				      spy={true}
				      smooth={true}
				      offset={offsetVal}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-home" onClick={() => {snapMenuBack()}}>Home</p>
					</Link>
					<Link activeClass="active"
				      to="about-page"
				      spy={true}
				      smooth={true}
				      offset={offsetVal}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-skills" onClick={() => {snapMenuBack()}}>About</p>
					</Link>
					<Link activeClass="active"
				      to="skills-page"
				      spy={true}
				      smooth={true}
				      offset={offsetVal}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-skills" onClick={() => {snapMenuBack()}}>Skills</p>
					</Link>
					<Link activeClass="active"
				      to="projects-page"
				      spy={true}
				      smooth={true}
				      offset={offsetVal}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-projects" onClick={() => {snapMenuBack()}}>Projects</p>
					</Link>
					<Link activeClass="active"
				      to="contact-page"
				      spy={true}
				      smooth={true}
				      offset={offsetVal}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-contact" onClick={() => {snapMenuBack()}}>Contact</p>
					</Link>
				</div>
			</nav>
	)
};

export default SmallNav;




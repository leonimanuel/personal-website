import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./nav-menu.styles.css"

const SmallNav = () => {
	return ( 
	<nav className="small-nav-items" id="small-nav-wrapper" style={{"borderBottom": "0px solid red", "transition": "0.2s ease"}}>
				<div className="small-home-box">
					<Link activeClass="active"
				      to="home-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-home">Home</p>
					</Link>
				</div>
				<div className="small-menu-box">
					<Link activeClass="active"
				      to="about-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-skills">About</p>
					</Link>
					<Link activeClass="active"
				      to="skills-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-skills">Skills</p>
					</Link>
					<Link activeClass="active"
				      to="projects-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-projects">Projects</p>
					</Link>
					<Link activeClass="active"
				      to="contact-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="small-nav-item" id="small-nav-contact">Contact</p>
					</Link>
				</div>
				<p className="small-nav-item navbar-icon">BOOP</p>
			</nav>
	)
};

export default SmallNav;




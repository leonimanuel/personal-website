import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


import './Projects2.css'

import ScrollDownButton from "../scroll-down-button/scroll-down-button.component";


import ProjectButton from "../project-button/project-button.component";
import CrownClothingPic from "./crown-clothing-pic.png";
import HangmanPic from "./hangman-pic.png";
import SmartbrainPic from "./smart-brain-pic.png";
import SquelchifyPic from "./codemonkey-pic.png"
// import AtlasPic from './atlas-pic.png'
// import PersonalWebsitePic from './personal-website-pic.png'

			// <img className="project-pic proj-pic-and-text-layer" src={CrownClothingPic} alt=""/>


const Projects = ({onRouteChange, offsetVal}) => {
	return (
	<div className="projects-page page">
		<h1 className="projects-heading page-header">PROJECTS</h1>
		<div className="projects-wrapper">
			<div className="project-container">
				<div className="pic-and-text">
					<img className="project-pic" src={CrownClothingPic} alt=""/>
					<div className="project-text-box">
						<h2 className="project-title">Crown Clothing</h2>
						<div className="project-text">
							A fully realized e-commerce React app with Firebase authorization and data storage, 
							and redux for state management. Utilizes local storage for session persistence and React
							Router for navigation.
	 					</div>
	 					<a href="https://crown-clothing-lim.herokuapp.com/" target="_blank">
		 					<ProjectButton />
		 				</a>
					</div>
				</div>
			</div>
			<div className="project-container">
				<div className="pic-and-text">
					<img className="project-pic" src={SmartbrainPic} alt=""/>
					<div className="project-text-box">
						<h2 className="project-title">Face Finder</h2>
						<div className="project-text">
							A no-frills React app that detects faces in any image url given by the user using Clarifai's 
							API, while recording and displaying a user's score. Utilizes a PostgreSQL database, server
							written with Knex.js. 
		 				</div>
		 				<a href="https://smart-brain-lim.herokuapp.com/" target="_blank">
		 					<ProjectButton />
		 				</a>
					</div>
				</div>
			</div>
			<div className="project-container">
				<div className="pic-and-text">
					<img className="project-pic" src={HangmanPic} alt=""/>
					<div className="project-text-box">
						<h2 className="project-title">Hangman</h2>
						<div className="project-text">
							A single-page game of hangman built with Vanilla JS and JQuery. Features extensive and dynamic
							DOM manipulation.
	 					</div>
	 					<a href="https://hangman-clean.herokuapp.com/" target="_blank">
		 					<ProjectButton />
		 				</a>
					</div>
				</div>
			</div>
			<div className="project-container">
				<div className="pic-and-text">
					<img className="project-pic" src={SquelchifyPic} alt=""/>
					<div className="project-text-box">
						<h2 className="project-title">SQUELFCHIFFY</h2>
						<div className="project-text">
							MY FUCKING WEBSITE
	 					</div>
	 					<Link activeClass="active"
	            to="home-page"
	            spy={true}
	            smooth={true}
	            offset={offsetVal}
	            duration={500}>
	 						<ProjectButton />
	 					</Link>
					</div>
				</div>
			</div>
		</div>
		<Link activeClass="active"
      to="contact-page"
      spy={true}
      smooth={true}
      offset={offsetVal}
      duration={500}>
			<ScrollDownButton />
    </Link>
	</div>
	)
};

	// return (
	// 	<div id="container">
	// 		<div style={{'fontSize': '50px'}}>Projects</div>
	// 		<div id="projects-container">
	// 			<div className="project-wrapper" id="face-recognition-wrapper">
	// 				<h3 className="project-title">Hangman</h3>
	// 				<p className = "project-description">Hangman is a single-page dynamically-typed website 
	// 				made with vanilla JS and Jquery. Includes CSS3 animations and DOM manipulation.</p>
	// 				<a className="project-link" href="https://hangman-clean.herokuapp.com/" target="_blank" rel="noopener noreferrer">
	// 					<img className="project-pic" id="hangman-pic" src={HangmanPic} alt="" width="" height=""/>
	// 				</a>
	// 			</div>
			
				
	// 			<div className="project-wrapper" id="face-recognition-wrapper">
	// 				<h3 className="project-title">Face Recognizer</h3>
	// 				<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
	// 				ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
	// 				<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
	// 					<img className="project-pic" id="hangman-pic" src={SmartbrainPic} alt="" width="" height=""/>
	// 				</a>
	// 			</div>

	// 			<div className="project-wrapper" id="face-recognition-wrapper">
	// 				<h3 className="project-title">Atlas</h3>
	// 				<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
	// 				ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
	// 				<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
	// 					<img className="project-pic" id="hangman-pic" src={AtlasPic} alt="" width="" height=""/>
	// 				</a>
	// 			</div>

	// 			<div className="project-wrapper" id="face-recognition-wrapper">
	// 				<h3 className="project-title">Squelch</h3>
	// 				<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
	// 				ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
	// 				<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
	// 					<img className="project-pic" id="hangman-pic" src={PersonalWebsitePic} alt="" width=" " height=""/>
	// 				</a>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	)


export default Projects;
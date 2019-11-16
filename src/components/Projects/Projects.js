import React from 'react';
import './Projects2.css'

import ProjectButton from "../project-button/project-button.component"
import CrownClothingPic from "./crown-clothing-pic.png"
import HangmanPic from './hangman-pic.png'
import SmartbrainPic from './smart-brain-pic.png'
// import AtlasPic from './atlas-pic.png'
// import PersonalWebsitePic from './personal-website-pic.png'

			// <img className="project-pic proj-pic-and-text-layer" src={CrownClothingPic} alt=""/>


const Projects = (onRouteChange) => {
	return (
	<div className="projects-wrapper">
		<div className="project-container">
			<h2 className="project-title">Crown Clothing</h2>
			<div className="pic-and-text">
				<img className="project-pic" src={CrownClothingPic} alt=""/>
				<div className="project-text-box">
					<div className="project-text">
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
	 					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
 					</div>
 					<ProjectButton />
				</div>
			</div>
		</div>
		<div className="project-container">
			<h2 className="project-title">Hangman</h2>
			<div className="pic-and-text">
				<img className="project-pic" src={HangmanPic} alt=""/>
				<div className="project-text-box">
					<div className="project-text">
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
	 					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
 					</div>
 					<ProjectButton />
				</div>
			</div>
			
		</div>
		<div className="project-container">
			<h2 className="project-title">Face Finder</h2>
			<div className="pic-and-text">
				<img className="project-pic" src={SmartbrainPic} alt=""/>
				<div className="project-text-box">
					<div className="project-text">
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
		 				ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
	 				</div>
	 				<ProjectButton />
				</div>
			</div>
		</div>
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
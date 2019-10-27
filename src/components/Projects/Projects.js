import React from 'react';
import './Projects.css'
import HangmanPic from './hangman-pic.png'
import SmartbrainPic from './smart-brain-pic.png'
import AtlasPic from './atlas-pic.png'
import PersonalWebsitePic from './personal-website-pic.png'


const Projects = (onRouteChange) => {
	return (
		<div id="container">
			<div style={{'font-size': '50px'}}>Projects</div>
			<div id="projects-container">
				<div className="project-wrapper" id="face-recognition-wrapper">
					<h3 className="project-title">Hangman</h3>
					<p className = "project-description">Hangman is a single-page dynamically-typed website 
					made with vanilla JS and Jquery. Includes CSS3 animations and DOM manipulation.</p>
					<a className="project-link" href="https://hangman-clean.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<img className="project-pic" id="hangman-pic" src={HangmanPic} alt="" width="" height=""/>
					</a>
				</div>
			
				
				<div className="project-wrapper" id="face-recognition-wrapper">
					<h3 className="project-title">Face Recognizer</h3>
					<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
					<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<img className="project-pic" id="hangman-pic" src={SmartbrainPic} alt="" width="" height=""/>
					</a>
				</div>

				<div className="project-wrapper" id="face-recognition-wrapper">
					<h3 className="project-title">Atlas</h3>
					<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
					<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<img className="project-pic" id="hangman-pic" src={AtlasPic} alt="" width="" height=""/>
					</a>
				</div>

				<div className="project-wrapper" id="face-recognition-wrapper">
					<h3 className="project-title">Squelch</h3>
					<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
					<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank" rel="noopener noreferrer">
						<img className="project-pic" id="hangman-pic" src={PersonalWebsitePic} alt="" width=" " height=""/>
					</a>
				</div>

				
			</div>
		</div>
		)
};

export default Projects;
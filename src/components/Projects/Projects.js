import React from 'react';
import './Projects.css'
import HangmanPic from './hangman-portfolio-pic.png'
import SmartbrainPic from './smart-brain-portfolio-pic.png'

const Projects = (onRouteChange) => {
	return (
		<div >
			<div style={{'font-size': '50px'}}>Projects</div>
			<a className="project-link" href="https://hangman-clean.herokuapp.com/" target="_blank">
				<h3>Hangman</h3>
				<div className="project-wrapper" id="face-recognition-wrapper">
					
					<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
					<img className="project-pic" id="hangman-pic" src={HangmanPic} alt="" width="" height=""/>
				</div>
			</a>

			<a className="project-link" href="https://smart-brain-lim.herokuapp.com/" target="_blank">
				<h3>Face Recognizer</h3>
				<div className="project-wrapper" id="face-recognition-wrapper">
					
					<p className = "project-description">ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
					ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
					<img className="project-pic" id="hangman-pic" src={SmartbrainPic} alt="" width="200px" height=""/>
				</div>
			</a>
		</div>
		)
};

export default Projects;
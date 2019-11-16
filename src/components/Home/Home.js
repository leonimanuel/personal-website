import React from 'react';
import './Home.css';
import ProfilePic from './profile-pic.jpg'
// import PaperTexture from './paper-texture.jpg'

const Home = (onRouteChange) => {
	return (
		<div>
			<div id="main-card" style={{"display": "flex", "justify-content": "space-between",
					"width": "80%", "margin": "auto"}}>
				<div id="home-text" style={{"text-align": "left"}}><span id="title-text" style={{"font-size": "2em"}}>Welcome to squelchify </span> <br />
				I specialize in making websites squelch. I specialize in making websites squelch. I specialize in making websites squelch.
				I specialize in making websites squelch. I specialize in making websites squelch. I specialize in making websites squelch.</div>
				<img id="profile-pic" src={ProfilePic} alt="" width="300" height=""/>
			</div>
		</div>
		)
};

export default Home;
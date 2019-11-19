import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import './Home.css';
import ProfilePic from './profile-pic.jpg'
import ScrollDownButton from "../scroll-down-button/scroll-down-button.component"
// import PaperTexture from './paper-texture.jpg'

const Home = (onRouteChange) => {
	return (
		<div>
			<div className="home-page">
				<div className="home-content">
					<div id="main-card" style={{"display": "flex", "justifyContent": "space-between",
						"width": "80%", "margin": "auto"}}>
					<div className="home-text" style={{"textAlign": "left"}}>
						I watched the storm, so beautiful yet terrific.
					</div>
					<img className="profile-pic" src={ProfilePic} alt="" width="300" height=""/>
				</div>
				</div>
					<Link activeClass="active"
            to="home-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
						<ScrollDownButton />
          </Link>

			</div>
		</div>
	);
};

export default Home;

// <span id="title-text" style={{"fontSize": "2em"}}>Welcome to squelchify </span> <br />
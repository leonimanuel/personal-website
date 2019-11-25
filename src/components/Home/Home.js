import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import Claireon from "./claireon2.png"

import './Home.css';
// import ProfilePic from './profile-pic.jpg'
import ScrollDownButton from "../scroll-down-button/scroll-down-button.component"
// import PaperTexture from './paper-texture.jpg'

const Home = ({onRouteChange, offsetVal}) => {
	return (
			<div className="home-page page">
				<div className="home-content">
					<div class="home-text">
						code you can count on
					</div>
				</div>
					<Link activeClass="active"
            to="about-page"
            spy={true}
            smooth={true}
            offset={offsetVal}
            duration={500}>
						<ScrollDownButton />
          </Link>
			</div>
	);
};

export default Home;

// <span id="title-text" style={{"fontSize": "2em"}}>Welcome to squelchify </span> <br />
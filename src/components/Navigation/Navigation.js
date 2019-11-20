import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


import './Navigation.css';


// navBoi.style.backgroundColor = "red"

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: "red",
		}
	}



	componentDidMount() {
		this.setState({selectedItem: document.getElementById("nav-home")});
		
		

		// let hoverLine = document.createElement("div");
		// hoverLine.setAttribute("id", "hover-line")
		// document.getElementById("nav-wrapper").appendChild(hoverLine)
		// hoverLine.setAttribute("style", "height: 0; border-bottom: 2px solid; position: fixed; transition: 0.2s ease");
		let hoverLine = document.getElementById("hover-line")
		hoverLine.style.top = `${document.getElementById("nav-home").getBoundingClientRect().bottom}px`
		hoverLine.style.left = `${document.getElementById("nav-home").getBoundingClientRect().left}px`;
		hoverLine.style.width = `${document.getElementById("nav-home").clientWidth}px`;

		window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
		  if (document.documentElement.scrollTop > 0) {
		    document.getElementById("nav-container").style.borderBottom = "2px solid rgb(0,0,0, 0.2)";
		  	// console.log(document.body.scrollTop)
		  	// console.log(document.documentElement.scrollTop)
		  }
		  else {
		    document.getElementById("nav-wrapper").style.borderBottom = "0";
		  }


		  if (document.documentElement.scrollTop > 200) {
		  	document.getElementById("nav-home").style.fontSize = "3em";
				// document.getElementById('hover-line').style.top = 54 + "px";
		  	// hoverLine.style.top = `${document.getElementById("nav-home").getBoundingClientRect().bottom}px`
		  	// console.log(document.documentElement.scrollTop)

		  }
		  else {
		  	document.getElementById("nav-home").style.fontSize = "5em";
		  	// document.getElementById('hover-line').style.top = 92 + "px";
		  }

		  let hoverLine = document.getElementById("hover-line")
			hoverLine.style.top = `${document.getElementById("nav-home").getBoundingClientRect().bottom}px`

		}
	}	

	slideHover = () => {
		let slideBoi = document.getElementById('hover-line')
		// console.log(window.event.target.id)
		// let HeyBoi = document.getElementById('underline-div')
		// HeyBoi.style.left = "100px"
		// console.log(HeyBoi)

		let hoveredItem = window.event.target
		// console.log(hoveredItem)
		// console.log(document.getElementById('nav-skills'))

		slideBoi.style.left = `${hoveredItem.getBoundingClientRect().left}px`
		slideBoi.style.width = `${hoveredItem.clientWidth}px`
		// slideBoi.style.width = `${hoveredItem.getBoundingClientRect().width}px`

		// let skills = document.getElementById('nav-skills')
		// let slideBoi = document.getElementById('underline-div')
		// console.log(skills.getBoundingClientRect().left);
		// slideBoi.style.left = `${skills.getBoundingClientRect().left}px`

		// console.log(skills.offsetWidth);
		//console.log(Skills.style.color)
		// console.log(this.state.selectedItem)
	}

	chooseItem = () => {
		let boop = window.event.target;
		this.setState({selectedItem: boop})
		// this.state.selectedItem = boop;
		// console.log(this.state.selectedItem.style.padding)
	}

	snapBack = () => {
		// console.log
		// let selectedItem = window.event.target
		// console.log(`Snap that back to ${window.event.target.id}`)
		
		document.getElementById('hover-line').style.left = `${this.state.selectedItem.getBoundingClientRect().left}px`
		document.getElementById('hover-line').style.width = `${this.state.selectedItem.clientWidth}px`
	}

	shrinkMenu = () => {
		var x = document.getElementById("app-container");
		console.log(x)
	  if (x.className === "app-container") {
	    x.className += " shift";
	    console.log(123)
	  } else {
	    x.className = "app-container";
	    console.log(123198734)
	  }	

		// var x = document.getElementById("nav-container");
		// console.log(x)
	 //  if (x.className === "nav-container") {
	 //    x.className += " responsive";
	 //  } else {
	 //    x.className = "nav-container";
	 //  }	
	}

	render () {
		const { onRouteChange } = this.props;
		return (
		<div className='nav-container' id="nav-container">
			<div id="selection-line"></div>
			<nav className='nav-items' id='nav-wrapper' style={{"borderBottom": "0px solid red", "transition": "0.2s ease"}}>
				<div className="home-box">
					<Link activeClass="active"
				      to="home-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="nav-item" id="nav-home" onClick={() => { onRouteChange('home'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>Home</p>
					</Link>
				</div>
				<div className="menu-box">
					<Link activeClass="active"
				      to="about-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="nav-item" id="nav-skills" onClick={() => { onRouteChange('skills'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>About</p>
					</Link>
					<Link activeClass="active"
				      to="skills-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="nav-item" id="nav-skills" onClick={() => { onRouteChange('skills'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>Skills</p>
					</Link>
					<Link activeClass="active"
				      to="projects-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="nav-item" id="nav-projects" onClick={() => { onRouteChange('projects'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>Projects</p>
					</Link>
					<Link activeClass="active"
				      to="contact-page"
				      spy={true}
				      smooth={true}
				      offset={-60}
				      duration={500}>
						<p className="nav-item" id="nav-contact" onClick={() => { onRouteChange('contact'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack} style={{'marginRight': '0px',}} >Contact</p>
					</Link>
				</div>
				<p className="nav-item navbar-icon" onClick={this.shrinkMenu}>BOOOoooooOP</p>
			</nav>
			<div id="hover-line"></div>
		</div>
	);
	}	
}
// onMouseLeave={this.snapBack} 
// , 'border-bottom': '2px solid white'

// 	return (
// 		<nav>
// 			<ul className="NavBar">
// 				<li onClick={() => onRouteChange('home')} >Home</li>
// 				<li onClick={() => onRouteChange('skills')} >Skills</li>
// 				<li onClick={() => onRouteChange('projects')} >Projects</li>
// 				<li onClick={() => onRouteChange('contact')} >Contact</li>
// 			</ul>
// 		</nav>
// 	);
// }


export default Navigation;

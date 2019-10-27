import React from 'react';
import './Navigation.css';


// navBoi.style.backgroundColor = "red"

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: "",
		}
	}

	componentDidMount() {
		this.setState({selectedItem: document.getElementById("nav-home")})
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
		console.log(this.state.selectedItem)
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

	render () {
		const { onRouteChange } = this.props;
		return (
		<div className='NavWrapper' style={{'textAlign': 'center'}}>
			
			<div id="selection-line"></div>
			<nav className='' id='nav-wrapper' style={{}}>
				<div id="hover-line"></div>
				<p className="NavItem" id="nav-home" onClick={() => { onRouteChange('home'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack} style={{'marginRight': 'auto', 'marginLeft': '0px', 'fontSize': '3em'}}>Home</p>
				<p className="NavItem" id="nav-skills" onClick={() => { onRouteChange('skills'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>Skills</p>
				<p className="NavItem" id="nav-projects" onClick={() => { onRouteChange('projects'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack}>Projects</p>
				<p className="NavItem" id="nav-contact" onClick={() => { onRouteChange('contact'); this.chooseItem() }} onMouseOver={this.slideHover} onMouseLeave={this.snapBack} style={{'marginRight': '0px',}} >Contact</p>
			</nav>
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


export default Navigation

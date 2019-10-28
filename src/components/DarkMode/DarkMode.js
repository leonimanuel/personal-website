import React from 'react';
import './DarkMode.css'


class DarkMode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lightMode: "light"
		}
	}

	hitLights = () => {
		if (this.state.lightMode === "light") {
			document.body.style.backgroundColor = "#355664";
			
			let darkButton = document.getElementById('dark-mode-button')
			darkButton.style.backgroundColor = "white"
			darkButton.style.color = "black"
			
			document.body.style.color = "white";
			this.setState({lightMode: "dark"});
			darkButton.innerHTML = "LIGHT MODE"
			
		} else {
			document.body.style.backgroundColor = "beige";
			
			let darkButton = document.getElementById('dark-mode-button')
			darkButton.style.backgroundColor = "black"
			darkButton.style.color = "white"
			darkButton.innerHTML = "DARK MODE"

			document.body.style.color = "black";
			this.setState({lightMode: "light"})
		}
		// if (document.body.style.backgroundColor === "beige") {
		// 	document.body.style.backgroundColor = "#355664";
		// 	console.log("hit them lights red abby")
		// }

	}

	render () {
		return (
		<div id="dark-mode-button" onClick={this.hitLights}>DARK MODE</div>
		)
	}
	
};

export default DarkMode;
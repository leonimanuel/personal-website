import React, {Component} from 'react';
import DarkMode from './components/DarkMode/DarkMode'
import Navigation from './components/Navigation/Navigation';
import './App.css'
import Skills from './components/Skills/Skills';
import WrongRoute from './components/WrongRoute/WrongRoute';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// import logo from './logo.svg';
// import './App.css';

document.body.style.color = "black";

class App extends Component {
	constructor() {
		super()
		this.state = {
			route: 'skills',
			// routeItem: "hohoho"
		}
	}

	onRouteChange = (routeBoi) => {
		this.setState({route: routeBoi})
		console.log("Hey Girl")
		// this.setState({routeItem: selectionId});
		// console.log(this.state.routeItem)
	}

	

  render() {
  	const { route } = this.state; 
  	return (
			<div className="App">
				<Navigation onRouteChange={this.onRouteChange} slideSelection={this.slideSelection} />
				<Home onRouteChange={this.onRouteChange} />
				<Skills id="skills-component" onRouteChange={this.onRouteChange} />
				<Projects onRouteChange={this.onRouteChange} />
				<Contact onRouteChange={this.onRouteChange} fadePageIn={this.fadePageIn} />
				<DarkMode />
			</div>
	  );
  } 
}


export default App;

	    // <div className="App">
	    // 	<Navigation onRouteChange={this.onRouteChange} slideSelection={this.slideSelection} />
	    // 	<DarkMode />
	    	// { route === 'home'
	    	// ? <Home onRouteChange={this.onRouteChange} />
	    	// : (route === 'skills')
    		// ? <Skills onRouteChange={this.onRouteChange} />
      //   	: (route === 'projects')
    		// ? <Projects onRouteChange={this.onRouteChange} />
      //   	: (route === 'contact')
    	// 	? <Contact onRouteChange={this.onRouteChange} fadePageIn={this.fadePageIn} />
     //    	: <WrongRoute />
	    // 	}
	    // </div>

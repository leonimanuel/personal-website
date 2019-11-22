import React, {Component} from 'react';
import DarkMode from './components/DarkMode/DarkMode'
import Navigation from './components/Navigation/Navigation';
import SmallNav from './components/nav-menu/nav-menu.component';
import './App.css'
import Skills from './components/Skills/Skills';
import WrongRoute from './components/WrongRoute/WrongRoute';
import Home from './components/Home/Home';
import About from "./components/about/about.component"
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
			offsetVal: -35
			// routeItem: "hohoho"
		}
	}

	onRouteChange = (routeBoi) => {
		this.setState({route: routeBoi})
		console.log("Hey Girl")
		// this.setState({routeItem: selectionId});
		// console.log(this.state.routeItem)
	}

	componentDidMount() {
		// console.log(document.getElementById("nav-proj-link").getAttribute("to"))
		// let x = document.getElementById("nav-container").style.height
		// console.log(x)

		console.log(document.documentElement.clientHeight)
		this.setState({offsetVal: (-document.documentElement.clientHeight * .07)})
		console.log(document.documentElement.clientWidth)
		if (document.documentElement.clientWidth < 600) {
			this.setState({offsetVal: -50})
		}
	}

  render() {
  	const { route, offsetVal } = this.state; 
  	return (
			<div className="App">
			<div className="app-container" id="app-container">
				<SmallNav offsetVal={offsetVal} onRouteChange={this.onRouteChange} />
				<Navigation offsetVal={offsetVal} onRouteChange={this.onRouteChange} slideSelection={this.slideSelection} />
				
				<Home offsetVal={offsetVal} onRouteChange={this.onRouteChange} />
				<About offsetVal={offsetVal}/>
				<Skills offsetVal={offsetVal} id="skills-component" onRouteChange={this.onRouteChange} />
				<Projects offsetVal={offsetVal} onRouteChange={this.onRouteChange} />
				<Contact offsetVal={offsetVal} onRouteChange={this.onRouteChange} fadePageIn={this.fadePageIn} />
				{/* <DarkMode /> */}
			</div>
				
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

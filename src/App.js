import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css'
import Skills from './components/Skills/Skills';
import WrongRoute from './components/WrongRoute/WrongRoute';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			route: 'projects'
		}
	}

	onRouteChange = (routeBoi) => {
		this.setState({route: routeBoi})
		console.log('route')
	}

  render() {
  	const { route } = this.state; 
  	return (
	    <div className="App">
	    	<Navigation onRouteChange={this.onRouteChange} />
	    	{ route === 'home'
	    	? <Home onRouteChange={this.onRouteChange} />
	    	: (route === 'skills')
    		? <Skills onRouteChange={this.onRouteChange} />
        	: (route === 'projects')
    		? <Projects onRouteChange={this.onRouteChange} />
        	: (route === 'contact')
    		? <Contact onRouteChange={this.onRouteChange} />
        	: <WrongRoute />
	    	}
	    </div>
	  );
  }
	  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

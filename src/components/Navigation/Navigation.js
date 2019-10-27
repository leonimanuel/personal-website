import React from 'react';
import './Navigation.css';

const Navigation = ({fadePageIn, onRouteChange}) => {
	return (
		<div className='NavWrapper' style={{'textAlign': 'center'}}>
			<nav style={{margin: 'auto', width: '95%', 'alignItems': 'flex-end', display: 'flex', justifyContent: 'flex-end'}} className=''>
				<p onClick={() => onRouteChange('home')} style={{'marginRight': 'auto', 'marginLeft': '0px', 'fontSize': '3em'}}className="NavItem">Home</p>
				<p onClick={() => onRouteChange('skills')} className="NavItem">Skills</p>
				<p onClick={() => onRouteChange('projects')} className="NavItem">Projects</p>
				<p onClick={() => onRouteChange('contact')} className="NavItem" style={{'marginRight': '0px',}}>Contact</p>
			</nav>
		</div>
	);
}

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

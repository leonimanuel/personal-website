import React from 'react';
import './Skills2.css'
import JsLogo from './JsLogo.svg';
import HtmlLogo from './HTML5_Badge.svg';
import CssLogo from './css3-logo.png';
import CodingSymbol from "./coding_symbol.svg"


class Skills extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: {
				"Security": [
					"SSH",
					"Encryption"]
				,
				"Performance Optimzation": [
					"Code splitting", 
					"Load balancing", 
					"Caching", 
					"Code Optimzation", 
					"Progressive web apps"]
			}
		}
	}

	componentDidMount() {
		var coll = document.getElementsByClassName("collapsible");
		// console.log(coll.style)
		var i;
		// var content = document.getElementsByClassName("subskill-box")
		// console.log(content)

		for (i = 0; i < coll.length; i++) {
		  coll[i].addEventListener("click", function() {
		    
		    this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    console.log(content.style.maxHeight)
		    if (content.style.display === "block") {
		      content.style.display = "none";
		    } else {
		      content.style.display = "block";
		    }

		    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	      console.log("nullboy")
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px"
		      console.log('scrollboy')
		    }
		  });
		}
	}


	render() {
		return (
			<div className="skills-container">
				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Client-Side</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Client-Side</h1>
					</div>
					
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">HTML</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={CssLogo} alt="" width="20px" height=""/>
							<div className="skill-item">CSS</div>
						</div>
						<div className="skill-binder collapsible" id="js-collapsible">
							<img className="logo" id="CssLogo" src={JsLogo} alt="" width="20px" height=""/>
							<div className="skill-item">JavaScript</div>
						</div>
						<div className="subskill-box" style={{"display": "none"}}>
							<div className="subskill-binder">
								<img className="subskill-logo" src={HtmlLogo} alt=""/>
								<p className="subskill-item">Vanilla JS</p>
							</div>
							<div className="subskill-binder">
								<img className="subskill-logo" src={HtmlLogo} alt=""/>
								<p className="subskill-item">JQuery</p>
							</div>
						</div>
						<div className="skill-binder collapsible">
							<img className="logo" id="CssLogo" src={JsLogo} alt="" width="20px" height=""/>
							<div className="skill-item">React</div>
						</div>
						<div className="subskill-box" style={{"display": "none"}}>
							<div className="subskill-binder">
								<img className="subskill-logo" src={HtmlLogo} alt=""/>
								<p className="subskill-item">Redux</p>
							</div>
							<div className="subskill-binder">
								<img className="subskill-logo" src={HtmlLogo} alt=""/>
								<p className="subskill-item">Router</p>
							</div>
							<div className="subskill-binder">
								<img className="subskill-logo" src={HtmlLogo} alt=""/>
								<p className="subskill-item">Reselect</p>
							</div>
						</div>
						<div className="skill-binder collapsible">
							<img className="logo" id="CssLogo" src={JsLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Node</div>
						</div>
						<div className="skill-binder collapsible">
							<img className="logo" id="CssLogo" src={JsLogo} alt="" width="20px" height=""/>
							<div className="skill-item">TypeScript</div>
						</div>
					</div>
				</div>

				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Security</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Security</h1>
					</div>
					
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">SSH</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Bcrypt</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Firebase Auth</div>
						</div>
					</div>
				</div>

				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Performance</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Performance</h1>
					</div>
					
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Code splitting</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Load balancing</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Caching</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Image optimzation</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Progressive web apps</div>
						</div>
					</div>
				</div>

				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Server-side</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Server-side</h1>
					</div>
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Firebase</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">PostgreSQL</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Redis</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Sessions & JWT</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">GraphQL & Appollo</div>
						</div>
					</div>
				</div>
				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Testing</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Testing</h1>
					</div>
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Testing</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Testing</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Testing</div>
						</div>
					</div>
				</div>
				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Deployment</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Deployment</h1>
					</div>
					<div className="skill-box">
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Amazon Web Services</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Heroku</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Webpack 4</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Parcel</div>
						</div>
						<div className="skill-binder">
							<img className="logo" id="CssLogo" src={HtmlLogo} alt="" width="20px" height=""/>
							<div className="skill-item">Docker</div>
						</div>
					</div>
				</div>
				<div className="skills-wrapper">
					<img className="skill-symbol-back" src={CodingSymbol} alt="" />
					<img className="skill-symbol " src={CodingSymbol} alt="" />
					
					<div className="skill-title-box-back">
						<h1 className="skill-title">Skills</h1>
					</div>
					<div className="skill-title-box">
						<h1 className="skill-title">Skills</h1>
					</div>
					
					<div className="skill-box">
						<div className="skill-binder">
							<div className="logo">😭</div>
							<div className="skill-item">Crying</div>
						</div>
						<div className="skill-binder">
							<div className="logo">😭</div>
							<div className="skill-item">Pretty much</div>
						</div>
						<div className="skill-binder">
							<div className="logo">😭</div>
							<div className="skill-item">All the time </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	
	// componentDidMount() {
	// 	let skillBox = document.createElement("div");
	// 	skillBox.setAttribute("id", "skill-box")
	// 	console.log(this.state.skills["Security"])
	// 	// skillBox.innerHTML =
	// }

	// toggleSkills = () => {
	// 	var header = document.getElementsByClassName("collapsible");
	// 	var content = document.getElementById("js-skills")
	// 	    this.header.toggle("active");
	// 	    if (content.style.display === "block") {
	// 	      content.style.display = "none";
	// 	    } else {
	// 	      content.style.display = "block";
	// 	  };
	// }

	// render () {
	// 	const { onRouteChange } = this.props;
	// 	return (
	// 		<div>
	// 			<p style={{margin: '0px', 'marginTop': '30px', color: 'white', 'fontSize': '40px'}}>What I got</p>
	// 			<div class="skill-box" id="coding-skills">
	// 				<h2>coding</h2>
	// 				<ul>
	// 					<li>HTML</li>
	// 					<li>CSS</li>
	// 					<li className="collapsible" onClick={this.toggleSkills}>JS</li>
	// 						<ul id="js-skills">
	// 							<li>React</li>
	// 							<li>Redux</li>
	// 							<li>Knex</li>
	// 						</ul>
	// 				</ul>
	// 			</div>
	// 			<div className='ContainerWrapper'>
	// 				<div className='SkillContainer'>
	// 					<div className="LogoContainer" id="Html">
	// 						<img className="Logo" id="HtmlLogo" src={HtmlLogo} alt="" width="" height=""/>
	// 						<p className="SkillCaption" id='HtmlCaption'>HTML</p>
	// 					</div>
						
	// 					<div className="LogoContainer" id="Css">
	// 						<img className="Logo" id="CssLogo" src={CssLogo} alt="" width="" height=""/>
	// 						<p className="SkillCaption" id='CssCaption'>CSS</p>
	// 					</div>

	// 					<div className="LogoContainer" id="JavaScript">
	// 						<img className="Logo" id="JsLogo" src={JsLogo} alt="" width="" height=""/>
	// 						<p className="SkillCaption" id='JsCaption'>JavaScript</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>

	// 	)
	// }
	
};

export default Skills;

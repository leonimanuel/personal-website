import React from 'react';
import './Skills.css'
import JsLogo from './JsLogo.svg';
import HtmlLogo from './HTML5_Badge.svg';
import CssLogo from './css3-logo.png';


const Skills = (onRouteChange) => {
	return (
		<div>
			<p style={{margin: '0px', 'marginTop': '30px', color: 'white', 'fontSize': '40px'}}>What I got</p>
			<div className='ContainerWrapper'>
				<div className='SkillContainer'>
					<div className="LogoContainer" id="Html">
						<img className="Logo" id="HtmlLogo" src={HtmlLogo} alt="" width="" height=""/>
						<p className="SkillCaption" id='HtmlCaption'>HTML</p>
					</div>
					
					<div className="LogoContainer" id="Css">
						<img className="Logo" id="CssLogo" src={CssLogo} alt="" width="" height=""/>
						<p className="SkillCaption" id='CssCaption'>CSS</p>
					</div>

					<div className="LogoContainer" id="JavaScript">
						<img className="Logo" id="JsLogo" src={JsLogo} alt="" width="" height=""/>
						<p className="SkillCaption" id='JsCaption'>JavaScript</p>
					</div>

				</div>
			</div>
		</div>

		)
};

export default Skills;

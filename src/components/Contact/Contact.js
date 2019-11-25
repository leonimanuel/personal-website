import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./contact.styles.css"

import ContactForm from "../contact-form/contact-form.component"
import ContactIcons from  "../contact-icons/contact-icons.component"

const Contact = ({onRouteChange, offsetVal}) => {
	return (
		<div className="contact-page page">
			<div className="contact-and-header container-and-header">
				<h1 className="contact-header page-header">Contact</h1>
				<div className="form-and-icons">
					<ContactForm />
					<ContactIcons />
				</div>
			</div>
		</div>
		
		)
};

export default Contact;
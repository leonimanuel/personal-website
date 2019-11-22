import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import "./contact.styles.css"

import ContactForm from "../contact-form/contact-form.component"
import ContactIcons from  "../contact-icons/contact-icons.component"

const Contact = ({onRouteChange, offsetVal}) => {
	return (
		<div className="contact-page page">
			<div className="contact-header page-header">Contact</div>
			<div className="form-and-icons">
				<ContactForm />
				<ContactIcons />
			</div>
		</div>
		
		)
};

export default Contact;
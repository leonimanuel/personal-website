import React from 'react';
import "./contact.styles.css"

import ContactForm from "../contact-form/contact-form.component"
import ContactIcons from  "../contact-icons/contact-icons.component"

const Contact = (onRouteChange) => {
	return (
		<div className="contact-page">
			<div style={{'fontSize': '50px'}}>Contact</div>
			<div className="form-and-icons">
				<ContactForm />
				<ContactIcons />
			</div>
		</div>
		
		)
};

export default Contact;
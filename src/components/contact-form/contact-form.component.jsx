import React from "react";
import "./contact-form.styles.css";

const ContactForm = () => (
	<div className="contact-form-container">
    <form action="action_page.php">

      <label for="fname">Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name" />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />

      <label for="fname">Company</label>
      <input type="text" id="fname" name="firstname" placeholder="Your company" />

      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="" style={{"height" : "200px"}}></textarea>

      <input type="submit" value="Submit" />

    </form>
  </div>
);

export default ContactForm;

        // <form action="action_page.php">

    // <label for="country">Country</label>
    // <select id="country" name="country">
    //   <option value="australia">Australia</option>
    //   <option value="canada">Canada</option>
    //   <option value="usa">USA</option>
    // </select>

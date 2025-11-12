import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <form>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              className="field"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email address</label>
            <input
              className="field"
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              className="field-mess"
              name=""
              id=""
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

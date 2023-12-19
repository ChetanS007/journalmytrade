import React from "react";
import "./contactUs.css";

function ContactUs() {
  return (
    <div>
      <div class="container">
        <h2 class="pricing-heading">Contact Us</h2>
        <div class="outer-container">
          <div class="static-container">
            <h1 class="semi-heading contactLeftmain">Let's Talk</h1>
            <p class="contactusparagraph desc">
              Do you have feedback or require new features in the app and need
              assistance? Reach out to us; we would be delighted to hear from
              you and provide assistance.
            </p>
            <div>
              <h3 class="semi-heading">Email</h3>
              <p class="contactusparagraph">support@journalmytrade.com</p>
            </div>
            <div>
              <h3 class="semi-heading">Socials</h3>
              <a href="instagram.com" className="contactSocial">
                Instagram
              </a>
              <br />
              <a href="twitter.com" className="contactSocial">
                Twitter
              </a>
              <br />
              <a href="facebook.com" className="contactSocial">
                Facebook
              </a>
            </div>
          </div>
          <div class="form-container">
            <div className="formFIelds">
              <label for="name">Name</label>
              <input type="text" class="input" id="name" value="" />
            </div>
            <div className="formFIelds">
              <label for="email">Email</label>
              <input type="email" class="input" id="email" value="" />
            </div>
            <div className="formFIelds">
              <label for="contact">Contact</label>
              <textarea class="input" id="contact"></textarea>
            </div>
            <button class="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

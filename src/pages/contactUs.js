import React from 'react'
import "./contactUs.css";

function ContactUs() {
    return (
        <div>

            <div class="ContactUs">
                <p class="contact-heading">Contact Us</p>
                <div class="outer-container">
                    <div class="static-container">
                        <h1 class="semi-heading">Let's Talk</h1>
                        <p class="paragraph">Do you have feedback or require new features in the app and need assistance? Reach out to us; we would be delighted to hear from you and provide assistance.</p>
                        <div>
                            <h3 class="semi-heading">Email</h3>
                            <p class="paragraph">support@journalmytrade.com</p>
                        </div>
                        <div>
                            <h3 class="semi-heading">Operating Address</h3>
                            <p class="paragraph">HNO 47 PIXEM DONGRI, VASCO DA GAMA,GOA 403802</p>
                        </div>
                        <div>
                            <h3 class="semi-heading">Socials</h3>
                            <a href="instagram.com">Instagram</a>
                            <br/>
                                <a href="twitter.com">Twitter</a>
                                <br/>
                                    <a href="facebook.com">Facebook</a>
                                </div>
                        </div>
                        <div class="form-container">
                            <label for="name">Name</label>
                            <input type="text" class="input" id="name" value="" />
                                <label for="email">Email</label>
                                <input type="email" class="input" id="email" value="" />
                                    <label for="contact">Contact</label>
                                    <textarea class="input" id="contact">
                                    </textarea>
                                    <button class="submit">Submit</button>
                                </div>
                        </div>
                    </div>
                </div>
                )
}

                export default ContactUs
import React from 'react'
import "./footer.css";
import imgJ from "./images/img-2.png";
import imgS from "./images/img-1.png";
import imgG from "./images/img-3.png";
import imgI from "./images/img-4.png";
import facebook from "./images/facebook-footer-logo.png";
import instagram from "./images/insta-footer-logo.png";
import twitter from "./images/twitter-footer-logo.png";
import linkedin from "./images/linkedin-footer-logo.png";
import { Link } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div>
 <div className="footer-outer">
      <div className="footer">
        <div className="section section-1">
          <img src={imgJ} alt="Journal my trade" className="footer-logo" />
          <p className="footer-paragraph">
            Journal My Trade is an online trading journal designed to help traders of all levels track their Forex,
            stocks, crypto, futures, CFD, and commodity trades. With its intuitive interface and comprehensive features,
            Journal My Trade provides traders with the tools they need to analyze their performance and make informed
            decisions.
          </p>
          <div className="footer-contact">
            <img src={imgS} alt="Email" className="footer-contact-icon" />
            <span>support@journalmytrade.com</span>
          </div>
          <div className="downloads-container">
            <img src={imgG} alt="App Store" className="download-button" />
            <img src={imgI} alt="Play Store" className="download-button" />
          </div>
        </div>
        <div className="section section-2">
          <h3 className="footer-section-heading">Pages</h3>
          <span exact="true" className="footer-page-link  active" href="/">
            Home
          </span>
          <span exact="true" className="footer-page-link" href="/blog">
            Blog
          </span>
          <span exact="true" className="footer-page-link" href="/faq">
            FAQ
          </span>
          <span exact="true" className="footer-page-link" href="/pricing">
            Pricing
          </span>
          <span exact="true" className="footer-page-link" href="/contact">
            Contact
          </span>
          <div className="footer-social-media-links">
            <img src={facebook} alt="Facebook" className="footer-social-media-icon" />
            <img src={twitter} alt="Twitter" className="footer-social-media-icon" />
            <img src={linkedin} alt="Linkedin" className="footer-social-media-icon" />
            <img src={instagram} alt="Instagram" className="footer-social-media-icon" />
          </div>
        </div>
        <div className="section section-3">
          <h3 className="footer-section-heading">Legal</h3>
          <Link to="/Terms"><span  onClick={scrollToTop} className="footer-page-link" >
            Terms &amp; Conditions
          </span></Link>
          <Link to="/Privacy"> <span  onClick={scrollToTop}  className="footer-page-link">
            Privacy Policy
          </span></Link>
          <Link to="/Refund"> <span  onClick={scrollToTop} className="footer-page-link">
            Refund &amp; Cancellation
          </span></Link>
        </div>
        <div className="section section-4">
          <h3 className="footer-section-heading">Risk Disclosure</h3>
          <p className="footer-risk">
            Trading futures and forex carries a substantial risk and is not suitable for all investors. There is a
            possibility that an investor could lose all or more than their initial investment. Risk capital is money
            that can be risked without compromising one's financial security or lifestyle. Therefore, only risk capital
            should be used for trading, and only those with sufficient risk capital should consider trading. It is
            important to note that past performance is not necessarily indicative of future results.
          </p>
        </div>
      </div>
      <p className="copyright">© Copyright 2023. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer
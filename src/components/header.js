
import React, { useState } from 'react';
import "./header.css";
import navlogo from "./images/homeImg1.png";
import { Link } from 'react-router-dom';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';

function Header() {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };

    const openSignInModal = () => {
      setIsSignInModalOpen(true);
    };
  
    const closeSignInModal = () => {
      setIsSignInModalOpen(false);
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light sticky-top">
                <div class="container">
                    <a exact="true" href="/" class="active navbar-brand">
                        <img src={navlogo} width="80" height="80" class="d-inline-block align-top logo" alt="Journalmytrade" />
                    </a>
                    <button type="button" aria-label="Toggle navigation" class="toggler navbar-toggler collapsed">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse">
                        <div class="flex-grow-1 gap-4 justify-content-center navbar-nav">
                            <Link to="/"   data-rr-ui-event-key="/" class="active-link nav-link active">Home</Link>
                            <a  href="/blog" data-rr-ui-event-key="/blog" class="nav-link">Blog</a>
                            <a  href="/faq" data-rr-ui-event-key="/faq" class="nav-link">FAQ</a>
                            <Link to="/Pricing"   data-rr-ui-event-key="/pricing" class="nav-link">Pricing</Link>
                            <a  href="/contact" data-rr-ui-event-key="/contact" class="nav-link">Contact</a>
                        </div>
                        <div class="justify-content-end navbar-nav">
                           <button class="sign-up" onClick={openSignUpModal}>Sign Up</button>
                           <button class="sign-up login" onClick={openSignInModal}>Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
            {isSignUpModalOpen && <SignUp onClose={closeSignUpModal} />}
            {isSignInModalOpen && <SignIn onClose={closeSignInModal} />}
        </div>
    )
}

export default Header;

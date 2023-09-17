import React, { useState } from 'react';
import './signIn.css';
import SignInlogo from "./imagesPage/footerLogo.png";
import SignInWithGoogle from "./imagesPage/Sign in with Google.png";


function SignIn({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div>
    
    <div className="modal">
      <div className="modal-content">
      <div className="close-icon" onClick={onClose}>
          <span className="material-icons">✖</span>
        </div>
        <div class="logo-div">
        <img src={SignInlogo} alt="Logo" className="logo-design" />
        </div>
        <h3>Sign In</h3>
        <div class="googleLogo">
        
        <img src={ SignInWithGoogle} alt="Logo" class="signGoogle" />
       </div>
       <h4 className="or">-----OR-----</h4>
        <form onSubmit={handleSubmit}>
         
          <input
          class="inputStyle"
          placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
          class="inputStyle"
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
       
      </div>
    </div>
    </div>
  );
}

export default SignIn;

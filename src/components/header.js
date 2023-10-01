import React, { useContext, useState } from "react";
import "./header.css";
import navlogo from "./images/homeImg1.png";
import { Link } from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signup";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

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

  const navHeaderData = [
    {
      name: "Home",
      route: "/",
      isActive: true,
    },
    {
      name: "Pricing",
      route: "/Pricing",
      isActive: false,
    },
    {
      name: "F.A.Q",
      route: "/faq",
      isActive: false,
    },
    {
      name: "Blog",
      route: "/blog",
      isActive: false,
    },
    {
      name: "Contact",
      route: "/contact",
      isActive: false,
    },
  ];

  return (
    <>
      <div class="container navHeadercontainer">
        <a exact="true" href="/" class="active navbar-brand">
          <img src={navlogo} width="150" height="100" alt="Journalmytrade" />
        </a>
        <div className="navheader">
          {navHeaderData.map((item) => (
            <Link
              to={item.route}
              data-rr-ui-event-key={item.route}
              class="active-link nav-link active"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div class="navButtonContanier">
          {isLoggedIn ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <>
              <button class="sign-up" onClick={openSignUpModal}>
                Sign Up
              </button>
              <button class="sign-up login" onClick={openSignInModal}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
      <div className="navborder"></div>
      {isSignUpModalOpen && <SignUp onClose={closeSignUpModal} />}
      {isSignInModalOpen && <SignIn onClose={closeSignInModal} />}
    </>
  );
}

export default Header;

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Refund from "./pages/refund";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";
import Header from "./components/header";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import SignIn from "./pages/signIn";

import Heatmap from "./pages/heatmap";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashborad/Dashboard";
import { useState } from "react";

function App() {
  const [isloggedin, setisloggedin] = useState(true);
  return (
    <div className="App">
      {isloggedin ? (
        <Routes>
          <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      ) : (
        <>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/Pricing" element={<Pricing></Pricing>}></Route>
            <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
            <Route path="/Terms" element={<Terms></Terms>}></Route>
            <Route path="/Refund" element={<Refund></Refund>}></Route>
            <Route path="/Privacy" element={<Privacy></Privacy>}></Route>
            <Route path="/Heatmap" element={<Heatmap></Heatmap>}></Route>
          </Routes>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;

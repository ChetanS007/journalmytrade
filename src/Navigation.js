import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/header";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Refund from "./pages/refund";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import Heatmap from "./pages/heatmap";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashborad/Dashboard";
import Journal from "./pages/Journal/Journal";
import Chart from "./pages/Chart/Chart";
import Notes from "./pages/Notes/Notes";
import Accounts from "./pages/Accounts/Accounts";
import Profile from "./pages/Profile/Profile";

export default function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <div className="dashboard-container">
          <Sidebar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Journal" element={<Journal />}></Route>
            <Route path="/Chart" element={<Chart />}></Route>
            <Route path="/Notes" element={<Notes />}></Route>
            <Route path="/Accounts" element={<Accounts />}></Route>
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/Dashboard" replace />} />
          </Routes>
        </div>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { NewHeader } from "./components/NewHeader";
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
  const [issidebaropen, setissidebaropen] = useState(true);
  const onburgerclick = () => {
    setissidebaropen(!issidebaropen);
  };
  return (
    <div>
      {isLoggedIn ? (
        <div className="dashboard-container">
          <Sidebar isOpen={issidebaropen} />
          <Routes>
            <Route
              path="/Dashboard"
              element={<Dashboard onburgerclick={onburgerclick} />}
            ></Route>
            <Route
              path="/Journal"
              element={<Journal onburgerclick={onburgerclick} />}
            ></Route>
            <Route path="/Chart" element={<Chart />}></Route>
            <Route
              path="/Notes"
              element={<Notes onburgerclick={onburgerclick} />}
            ></Route>
            <Route
              path="/Accounts"
              element={<Accounts onburgerclick={onburgerclick} />}
            ></Route>
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/Dashboard" replace />} />
          </Routes>
        </div>
      ) : (
        <>
          <NewHeader></NewHeader>
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

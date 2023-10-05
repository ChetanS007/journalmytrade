import React from "react";
import { Link, NavLink } from "react-router-dom";
import homeImg1 from "./../pages/imagesPage/homeImg1.png";

export default function Sidebar() {
  const [sidebarData, setsidebarData] = React.useState([
    { item: "Dashboard", to: "/Dashboard", isActive: true },
    { item: "Journal", to: "/Journal", isActive: false },
    { item: "Charts", to: "/Charts", isActive: false },
    { item: "Notes", to: "/Notes", isActive: false },
    { item: "Accounts", to: "/Accounts", isActive: false },
    { item: "Risk Management", to: "/RiskManagement", isActive: false },
  ]);

  function MenuItem({ label, to, isActive }) {
    return (
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "menu-item" : isActive ? "menu-item-active" : "menu-item"
        }
      >
        {label}
      </NavLink>
    );
  }

  return (
    <div className="sidebar">
      <div className="dash-logo">
        <img src={homeImg1} alt="Journal My Trade" class="dashBanner-logo" />
      </div>
      <MenuItem
        label="Dashboard"
        to={"/Dashboard"}
        isActive={sidebarData[0].isActive}
      />
      <MenuItem label="Journal" to={"/Journal"} />
      <MenuItem label="Charts" to="/Charts" />
      <MenuItem label="Notes" to="/Notes" />
      <MenuItem label="Accounts" to="/Accounts" />
      <MenuItem label="Risk Management" to="/Accounts" />
    </div>
  );
}

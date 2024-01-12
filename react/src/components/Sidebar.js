import React from "react";
import { NavLink } from "react-router-dom";
import homeImg1 from "./../pages/imagesPage/homeImg1.png";
import { Drawer } from "@mantine/core";

export default function Sidebar({ isOpen }) {
  function MenuItem({ label, to }) {
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
    <div className={isOpen ? "sidebar" : "sidebarHidden"}>
      <div className="dash-logo">
        <img src={homeImg1} alt="Journal My Trade" class="dashBanner-logo" />
      </div>
      <MenuItem label="Dashboard" to={"/Dashboard"} />
      <MenuItem label="Journal" to={"/Journal"} />
      <MenuItem label="Charts" to="/Chart" />
      <MenuItem label="Notes" to="/Notes" />
      <MenuItem label="Accounts" to="/Accounts" />
      {/* <MenuItem label="Risk Management" to="/risk" /> */}
    </div>
  );
}

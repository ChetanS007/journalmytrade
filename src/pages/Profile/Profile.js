import React, { useState } from "react";
import "./Profile.css";
import { RxPerson } from "react-icons/rx";
import { IconContext } from "react-icons";
import Dropdown from "react-dropdown";

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "xyz@gmail.com",
    phone: "9999977788",
    country: "India",
    currency: "Indian Rupees",
    financialYear: "April to March",
    dateFormat: "dd/mm/yyyy",
  });

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
    alert("Account deletion initiated.");
  };

  return (
    <div className="main-content">
      <div className="Profile-container">
        <div className="profile-header">
          <h4 className="profile-heading">Profile</h4>
          <div className="account-diver"></div>
        </div>
        <div className="prfile-info-container">
          <div className="profile-image">
            <div>
              <div className="avatar-placeholder">
                <IconContext.Provider value={{ size: 50 }}>
                  <RxPerson />
                </IconContext.Provider>
              </div>
            </div>
            <h3 className="profile-name">My Name</h3>
          </div>
          <div className="profile-change">Change Photo</div>

          <div className="profile-info">
            <div className="account-details profile-detail">
              <div className="account-detail-type">E-mail</div>
              <div className="account-detail-value">{formData.email}</div>
            </div>
            <div className="account-details profile-detail">
              <div className="account-detail-type">Phone</div>
              <div className="account-detail-value">{formData.phone}</div>
            </div>
            <div className="account-details profile-detail">
              <div className="account-detail-type">Country</div>
              <div className="account-detail-value">
                <Dropdown
                  options={["India"]}
                  onChange={(item) => {}}
                  controlClassName="dropdownInputfiled proile-dropDown"
                  value={"India"}
                  className="dropDown-profile"
                />
              </div>
            </div>
            <div className="account-details profile-detail">
              <div className="account-detail-type">Currency</div>
              <div className="account-detail-value">
                <Dropdown
                  options={["₹ Indian Rupees"]}
                  onChange={(item) => {}}
                  controlClassName="dropdownInputfiled proile-dropDown"
                  value={"₹ Indian Rupees"}
                  className="dropDown-profile"
                />
              </div>
            </div>
            <div className="account-details profile-detail">
              <div className="account-detail-type">Financial Year</div>
              <div className="account-detail-value">
                <Dropdown
                  options={["April to March", "January to December"]}
                  onChange={(item) => {}}
                  controlClassName="dropdownInputfiled proile-dropDown"
                  value={"April to March"}
                  className="dropDown-profile"
                />
              </div>
            </div>
            <div className="account-details profile-detail">
              <div className="account-detail-type">Date Format</div>
              <div className="account-detail-value">{formData.dateFormat}</div>
            </div>
          </div>
          <div className="profile-button">
            <button className="saveButtonOption" onClick={() => {}}>
              Update Info
            </button>
          </div>
        </div>
        <div className="account-diver"></div>
        <div className="prfile-info-container">
          <h4
            className="profile-heading"
            style={{ margin: 0, marginBottom: "10px" }}
          >
            Delete Account Permanently
          </h4>

          <div className="profile-delete-account-disclaimer">
            <p>
              "Are you absolutely certain that you wish to delete your account?
              Please be aware that this action will result in the immediate and
              permanent deletion of all your data, including your trades,
              accounts. It is important to note that this process cannot be
              undone, so please proceed with caution."
            </p>
          </div>
          <div className="profile-button">
            <button onClick={handleDeleteAccount} className="delete-button">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

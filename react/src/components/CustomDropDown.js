import React from "react";

import "./Dropdown.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
export default function CustomDropDown({
  label,
  data,
  selectedValue,
  type = "normal",
  placeholder = "Select",
  style,
  isError = false,
  value,
  dropdownstyles,
}) {
  return (
    <div className="customField">
      <div className="dropdwon-label">
        <div> {label}</div>
        {isError && (
          <div style={{ color: "red", marginLeft: "10px" }}>compulsory</div>
        )}
      </div>
      {type === "dropdown" && (
        <Dropdown
          options={data}
          onChange={(item) => {
            selectedValue(item.value);
          }}
          placeholder={placeholder}
          controlClassName={`dropdownInputfiled ${dropdownstyles}`}
          value={value}
          style={style}
        />
      )}
      {(type === "normal" || type === "date" || type === "number") && (
        <input
          onChange={(e) => selectedValue(e.target.value)}
          placeholder={placeholder}
          className="dropdownInputfiled"
          style={style}
          type={type}
        />
      )}
    </div>
  );
}

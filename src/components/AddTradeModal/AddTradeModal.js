import React, { useState } from "react";
import Modal from "react-modal";
import "./AddTradeModal.css";
import imgJ from "./../images/whitelogo.png";
import InputLabel from "@mui/material/InputLabel";
import CustomDropDown from "../CustomDropDown";

const AddTradeModal = () => {
  const Header = () => {
    return (
      <header className="modal-header">
        <img src={imgJ} alt="Logo" className="modal-logo" />
        <h5 className="modalheaderText">TRADE ENTRY FORM</h5>
        <div className="dropdown-container"></div>
      </header>
    );
  };
  return (
    <Modal isOpen={true} className={"modal-cont"} overlayClassName={"overlay"}>
      <Header />
      <div className="trade-entry-form">
        <div className="form-row">
          <CustomDropDown
            label={"Account"}
            data={["Abc", "Zerodha", "Grow", "Accout2"]}
            selectedValue={(item) => {
              console.log(item);
            }}
            type={"dropdown"}
          />
          <CustomDropDown
            label={"Symbol"}
            selectedValue={(item) => {
              console.log(item);
            }}
            placeholder="Symbol Name"
            style={{ width: "250px" }}
          />
          <CustomDropDown
            label={"Qty"}
            selectedValue={(item) => {
              console.log(item);
            }}
            placeholder="Quantity"
            isError={true}
          />
          <div className="radio-group">
            <label className="dropdwon-label" style={{ marginBottom: "0px" }}>
              Buy
            </label>
            <input
              type="radio"
              name="buySell"
              id="buy"
              value="buy"
              style={{ width: "15px" }}
            />
            <label className="dropdwon-label" style={{ marginBottom: "0px" }}>
              Sell
            </label>
            <input
              type="radio"
              name="buySell"
              id="sell"
              value="sell"
              style={{ width: "15px" }}
            />
          </div>
        </div>

        <div className="form-row">
          <CustomDropDown
            label={"Trade Type"}
            data={[
              "Scalping",
              "Intraday",
              "BTST",
              "STBT",
              "Short Term",
              "Long Term",
              "Swing Trade",
            ]}
            selectedValue={(item) => {
              console.log(item);
            }}
            type={"dropdown"}
          />
          <CustomDropDown
            label={"Segment"}
            data={[
              "Equity / Cash",
              "Futures",
              "Options",
              "Currency / Forex",
              "CFD",
              "Long Term",
              "Commodity",
            ]}
            selectedValue={(item) => {
              console.log(item);
            }}
            type={"dropdown"}
          />
          <CustomDropDown
            label={"Entry Price"}
            selectedValue={(item) => {
              console.log(item);
            }}
            placeholder="Entry Price"
            style={{ width: "200px" }}
          />
          <CustomDropDown
            label={"Entry Date"}
            selectedValue={(item) => {
              console.log(item);
            }}
            placeholder="Date"
            style={{ width: "220px" }}
            type={"date"}
          />
        </div>

        <div className="form-row">
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 1 }}>
            <div className="form-row">
              <CustomDropDown
                label={"Exit Price"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Exit Price"
                style={{ width: "200px" }}
              />
              <CustomDropDown
                label={"Exit Date"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Date"
                style={{ width: "220px" }}
                type={"date"}
              />
            </div>
            <div className="form-row">
              <CustomDropDown
                label={"Stop Loss"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Amount (Optional)"
                style={{ width: "200px" }}
              />
              <CustomDropDown
                label={"Take Profit"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Amount (Optional)"
                style={{ width: "220px" }}
              />
            </div>
            <div className="form-row">
              <CustomDropDown
                label={"Brokerage & Tax"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Amount"
                style={{ width: "200px" }}
              />
              <CustomDropDown
                label={"Profit & Loss"}
                selectedValue={(item) => {
                  console.log(item);
                }}
                placeholder="Amount"
                style={{ width: "220px" }}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTradeModal;

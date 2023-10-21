import React, { useState } from "react";
import Modal from "react-modal";
import "./AddTradeModal.css";
import imgJ from "./../images/whitelogo.png";
import CustomDropDown from "../CustomDropDown";
import Switch from "@mui/material/Switch";
import { AuthContext } from "../../context/AuthContext";
import { AddTrade } from "../../apis/apicalls";

const AddTradeModal = ({ isopen, oncancel }) => {
  const [isBulkUpload, setisBulkUpload] = useState(false);
  const { AccountsDetail, accessToken } = React.useContext(AuthContext);
  const accounts = AccountsDetail.map((obj) => obj.id);
  const [TradeData, setTradeData] = useState({
    account: 1,
    symbol: null,
    segment: "Equity / Cash",
    qty: null,
    trade_type: "Scalping",
    teadeside: 1,
    entry_price: null,
    entry_date: null,
    exit_price: null,
    exit_date: null,
    stop_loss: null,
    take_profit: null,
    brokrage_tax: null,
    profit_n_loss: null,
    chart_img: null,
    trade_notes: "",
    date: "",
  });
  const [symbolerror, setsymbolerror] = useState(false);
  const [qtyerro, setqtyerro] = useState(false);
  const [entry_priceError, setentry_priceError] = useState(false);
  const [entrydateerror, setentrydateerror] = useState(false);
  const handleTrade = async () => {
    if (!TradeData.symbol) {
      setsymbolerror(true);
      return;
    }
    if (!TradeData.qty && TradeData.qty < 1) {
      setqtyerro(true);
      return;
    }
    if (!TradeData.entry_price) {
      setentry_priceError(true);
      return;
    }
    if (!TradeData.entry_date) {
      setentrydateerror(true);
    }
    const resp = await AddTrade(accessToken, {
      ...TradeData,
      date: new Date().toISOString(),
    });
    if (resp?.status === 201) {
      window.location.reload();
    } else {
      console.log(resp);
      alert("enable to add trade please try again");
    }
  };

  const Header = () => {
    return (
      <header className="modal-header">
        <img src={imgJ} alt="Logo" className="modal-logo" />
        <h5 className="modalheaderText">
          {isBulkUpload ? "BULK UPLOAD" : "TRADE ENTRY FORM"}
        </h5>
        <div className="dropdown-container"></div>
      </header>
    );
  };
  return (
    <Modal
      isOpen={isopen}
      className={"modal-cont"}
      overlayClassName={"overlay"}
    >
      <Header />
      <div className="trade-entry-form">
        {isBulkUpload ? (
          <>
            <div
              className="form-row"
              style={{ justifyContent: "space-between" }}
            >
              <input
                type="file"
                name="fileToUpload"
                id="fileToUpload"
                accept="image/*"
                className="dropdownInputfiled"
                style={{ width: "100%" }}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                }}
              />
            </div>
            <div
              className="form-row"
              style={{ justifyContent: "space-between" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "100px",
                }}
              >
                <div className="dropdwon-label">Trade Entry Form</div>
                <Switch
                  color="default"
                  value={!isBulkUpload}
                  onChange={(event) => {
                    setisBulkUpload(!event.target.checked);
                  }}
                />
              </div>
              <div>
                <button className="saveButtonOption">Upload</button>
                <button className="cancelButtonOption" onClick={oncancel}>
                  Cancel
                </button>
                {/* close the modal on click */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="form-row">
              <CustomDropDown
                label={"Account"}
                data={accounts}
                selectedValue={(item) => {
                  setTradeData({ ...TradeData, account: item });
                }}
                type={"dropdown"}
              />
              <CustomDropDown
                label={"Symbol"}
                selectedValue={(item) => {
                  setTradeData({ ...TradeData, symbol: item });
                }}
                placeholder="Symbol Name"
                style={{ width: "250px" }}
                isError={symbolerror}
              />
              <CustomDropDown
                label={"Qty"}
                selectedValue={(item) => {
                  setTradeData({ ...TradeData, qty: +item });
                }}
                type="number"
                placeholder="Quantity"
                isError={qtyerro}
              />
              <div className="radio-group">
                <label
                  className="dropdwon-label"
                  style={{ marginBottom: "0px" }}
                >
                  Buy
                </label>
                <input
                  type="radio"
                  name="buySell"
                  id="buy"
                  value="buy"
                  style={{ width: "15px" }}
                  checked={TradeData.teadeside == 1}
                  onChange={(item) => {
                    setTradeData({
                      ...TradeData,
                      teadeside: item.target.checked ? 1 : 2,
                    });
                  }}
                />
                <label
                  className="dropdwon-label"
                  style={{ marginBottom: "0px" }}
                >
                  Sell
                </label>
                <input
                  type="radio"
                  name="buySell"
                  id="sell"
                  value="sell"
                  style={{ width: "15px" }}
                  checked={TradeData.teadeside == 2}
                  onChange={(item) => {
                    setTradeData({
                      ...TradeData,
                      teadeside: item.target.checked ? 2 : 1,
                    });
                  }}
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
                  setTradeData({ ...TradeData, trade_type: item });
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
                  setTradeData({ ...TradeData, segment: item });
                }}
                type={"dropdown"}
              />
              <CustomDropDown
                label={"Entry Price"}
                selectedValue={(item) => {
                  setTradeData({ ...TradeData, entry_price: +item });
                }}
                placeholder="Entry Price"
                type="number"
                style={{ width: "200px" }}
                isError={entry_priceError}
              />
              <CustomDropDown
                label={"Entry Date"}
                selectedValue={(item) => {
                  setTradeData({
                    ...TradeData,
                    entry_date: new Date(item).toISOString(),
                  });
                }}
                placeholder="Date"
                style={{ width: "220px" }}
                type={"date"}
                isError={entrydateerror}
              />
            </div>

            <div className="form-row" style={{ alignItems: "normal" }}>
              <div className="left-div">
                <textarea
                  className="left-input"
                  placeholder="Trade Notes"
                  onChange={(e) => {
                    setTradeData({ ...TradeData, trade_notes: e.target.value });
                  }}
                />
                <div style={{ textAlign: "end" }}>Max 500 word</div>
              </div>
              <div style={{ flex: 1 }}>
                <div className="form-row">
                  <CustomDropDown
                    label={"Exit Price"}
                    selectedValue={(item) => {
                      setTradeData({ ...TradeData, exit_price: +item });
                    }}
                    type="number"
                    placeholder="Exit Price"
                    style={{ width: "200px" }}
                  />
                  <CustomDropDown
                    label={"Exit Date"}
                    selectedValue={(item) => {
                      setTradeData({
                        ...TradeData,
                        exit_date: new Date(item).toISOString(),
                      });
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
                      setTradeData({ ...TradeData, stop_loss: +item });
                    }}
                    placeholder="Amount (Optional)"
                    style={{ width: "200px" }}
                    type="number"
                  />
                  <CustomDropDown
                    label={"Take Profit"}
                    selectedValue={(item) => {
                      setTradeData({ ...TradeData, take_profit: +item });
                    }}
                    placeholder="Amount (Optional)"
                    style={{ width: "220px" }}
                    type="number"
                  />
                </div>
                <div className="form-row">
                  <CustomDropDown
                    label={"Brokerage & Tax"}
                    selectedValue={(item) => {
                      setTradeData({ ...TradeData, brokrage_tax: +item });
                    }}
                    placeholder="Amount"
                    style={{ width: "200px" }}
                    type="number"
                  />
                  <CustomDropDown
                    label={"Profit & Loss"}
                    selectedValue={(item) => {
                      setTradeData({ ...TradeData, profit_n_loss: +item });
                    }}
                    placeholder="Amount"
                    style={{ width: "220px" }}
                    type="number"
                  />
                </div>
                <input
                  type="file"
                  name="fileToUpload"
                  id="fileToUpload"
                  accept="image/*"
                  className="dropdownInputfiled"
                  style={{ width: "95%" }}
                  onChange={(e) => {
                    setTradeData({
                      ...TradeData,
                      chart_img: e.target.files[0],
                    });
                  }}
                />
              </div>
            </div>

            <div
              className="form-row"
              style={{ justifyContent: "space-between" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="dropdwon-label">Bulk Trade Upload</div>
                <Switch
                  color="default"
                  value={isBulkUpload}
                  onChange={(event) => {
                    setisBulkUpload(event.target.checked);
                  }}
                />
              </div>
              <div>
                <button
                  className="saveButtonOption"
                  onClick={() => {
                    handleTrade();
                  }}
                >
                  Save
                </button>
                <button className="cancelButtonOption" onClick={oncancel}>
                  Cancel
                </button>
                {/* close the modal on click */}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddTradeModal;

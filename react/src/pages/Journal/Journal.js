import React, { useState, useEffect } from "react";
import "./Journal.css";
import { RiListSettingsLine } from "react-icons/ri";
import {
  IoPersonCircleOutline,
  IoBookOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { FiLogOut, FiSettings, FiPlus } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IconContext } from "react-icons";
import { AuthContext } from "../../context/AuthContext";
import CustomTable from "../../components/CustomTable";
import TradeDetailCard from "../../components/TradeDetailCard";
import AddTradeModal from "../../components/AddTradeModal/AddTradeModal";
import { Link } from "react-router-dom";
import TradeDetail from "../TradeDetail/TradeDetail";
export default function Journal({ onburgerclick }) {
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const { logout, alltrades, genraltrades } = React.useContext(AuthContext);
  const [tradeModal, settradeModal] = React.useState(false);
  const [TradeDetails, setTradeDetails] = useState(null);
  const LogoutHandler = () => {
    logout();
  };
  const addtrade = () => {
    settradeModal(true);
  };

  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <div>
            <RiListSettingsLine onclick={onburgerclick} />
            <button className="add-tradebutton" onClick={addtrade}>
              Add Trade
              <IconContext.Provider value={{ color: "#fff", size: 20 }}>
                <FiPlus />
              </IconContext.Provider>
            </button>
            <IconContext.Provider value={{ color: "red", size: 30 }}>
              <IoTrashOutline />
            </IconContext.Provider>
          </div>

          <div onClick={() => setshowlogutmodal(!showlogutmodal)}>
            <IoPersonCircleOutline />
            {showlogutmodal && (
              <IconContext.Provider value={{ color: "#0d0a3f", size: 20 }}>
                <div className="popup-main">
                  <p className="popup-head">Name</p>
                  <div className="popup-item">
                    <Link className="popup-itemname" to={"/Profile"}>
                      Setting
                    </Link>{" "}
                    <FiSettings />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Subscription</span>
                    <MdOutlineSubscriptions />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Support</span>
                    <GoQuestion />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Learning</span>
                    <IoBookOutline />
                  </div>
                  <div className="popup-item" onClick={LogoutHandler}>
                    <span className="popup-itemname">logout</span>
                    <FiLogOut />
                  </div>
                </div>
              </IconContext.Provider>
            )}
          </div>
        </IconContext.Provider>
      </div>
    );
  }
  function TableCard() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard>
            <CustomTable
              rows={alltrades}
              showColumnName={true}
              tradeDetailClick={(item) => {
                setTradeDetails(item);
              }}
            />
          </TradeDetailCard>
        </div>
      </div>
    );
  }

  function TradeSummary() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard>
            <div className="journal-trade-summary-main">
              <div>
                <p className="journal-trade-summary-head">Total Trades</p>
                {genraltrades?.total_trade && <p>{genraltrades.total_trade}</p>}
              </div>
              <div>
                <p className="journal-trade-summary-head">Win Trades</p>
                {genraltrades?.win && <p>{genraltrades.win}</p>}
              </div>
              <div>
                <p className="journal-trade-summary-head">Loss Trades</p>
                {genraltrades?.loss && <p>{genraltrades.loss}</p>}
              </div>
              <div>
                <p className="journal-trade-summary-head">Tax & Consumption</p>
                {genraltrades?.brokrage_tax && (
                  <p>Rs.{genraltrades.brokrage_tax}/-</p>
                )}
              </div>
              <div>
                <p className="journal-trade-summary-head">Net Profit & Loss</p>
                {genraltrades?.net_profit_loss && (
                  <p>Rs.{genraltrades.net_profit_loss}/-</p>
                )}
              </div>
            </div>
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  return (
    <div className="main-content">
      {TradeDetails ? (
        <TradeDetail
          onBackPress={() => {
            setTradeDetails(null);
          }}
        />
      ) : (
        <>
          {" "}
          <MainHeader />
          <TradeSummary />
          <TableCard />
          <AddTradeModal
            isopen={tradeModal}
            oncancel={() => {
              settradeModal(false);
            }}
          />
        </>
      )}
    </div>
  );
}

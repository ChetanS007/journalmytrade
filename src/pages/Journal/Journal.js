import React from "react";
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
export default function Journal() {
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const { logout } = React.useContext(AuthContext);

  const LogoutHandler = () => {
    logout();
  };
  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <div>
            <RiListSettingsLine />
            <button className="add-tradebutton">
              Add Trade{" "}
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
                    <span className="popup-itemname">Setting</span>
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
    const rows = [
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "22-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "523",
        ExitPrice: "567",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
      {
        Date: "23-Sep-2023",
        TradeType: "Intraday",
        Segment: "Cash",
        Symbolname: "Reliance",
        Tradeside: "Buy",
        Qty: "100",
        EntryPrice: "567",
        ExitPrice: "523",
        Net: "12,00,000/-",
        Return: "15%",
        Account: "Zerodha",
      },
    ];
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard>
            <CustomTable rows={rows} showColumnName={true} />
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
                <p>7</p>
              </div>
              <div>
                <p className="journal-trade-summary-head">Win Trades</p>
                <p>7</p>
              </div>{" "}
              <div>
                <p className="journal-trade-summary-head">Loss Trades</p>
                <p>7</p>
              </div>
              <div>
                <p className="journal-trade-summary-head">Tax & Consumption</p>
                <p>Rs. 700/-</p>
              </div>
              <div>
                <p className="journal-trade-summary-head">Net Profit & Loss</p>
                <p>Rs. 700/-</p>
              </div>
            </div>
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  return (
    <div className="main-content">
      <MainHeader />
      <TradeSummary />
      <TableCard />
    </div>
  );
}

import React, { useContext } from "react";
import "./TradeDetail.css";
import TradeDetailCard from "../../components/TradeDetailCard";
import { IconContext } from "react-icons";
import { RiDeleteBinLine, RiEditLine, RiCloseLine } from "react-icons/ri";
import { MdOutlineLabel } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import StockChart from "../../components/StockChart";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
const TradeDetail = ({ onBackPress, tradeInfo }) => {
  const { getAccountNamebyId, DeleteTradeHandler } = useContext(AuthContext);
  console.log(tradeInfo);
  const trade = {
    id: tradeInfo.id,
    labels: ["Label1", "Label2", "Label3"],
    account: getAccountNamebyId(tradeInfo.account),
    symbolName: tradeInfo.symbol,
    tradeSide: tradeInfo.teadeside === 1 ? "Buy" : "Sell",
    entryDate: moment(tradeInfo.entry_date).format("DD MMMM YYYY"),
    entryPrice: tradeInfo.entry_price,
    quantity: tradeInfo.qty,
    amountInvested: `${tradeInfo.entry_price * tradeInfo.qty}/-`,
    exitDate: moment(tradeInfo.exit_date).format("DD MMMM YYYY"),
    exitPrice: tradeInfo.exit_price,
    stopLoss: `${tradeInfo.stop_loss}/-`,
    takeProfit: `${tradeInfo.take_profit}/-`,
    brokerageTax: `${tradeInfo.brokrage_tax}/-`,
    tradeResult: "Winner",
    profitLossValue: `${tradeInfo.profit_n_loss}/-`,
    profitLosspercent: `${tradeInfo.return_percentage}`,

    chartImageUrl: "path_to_your_chart_image.png", // Replace with actual path or URL
    tradeNotes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare metus non elit ornare, at sagittis ligula placerat. Mauris non sapien at urna auctor vehicula. Nulla facilisi.`,
  };

  return (
    <div className="trade-summary">
      <div className="card-container">
        <TradeDetailCard>
          <div>
            <div className="tradedetail-header">
              <div onClick={() => onBackPress()}>
                <IconContext.Provider value={{ color: "#0d0a3f", size: 25 }}>
                  <IoIosArrowRoundBack />
                </IconContext.Provider>
              </div>
              <h4>Trade Details</h4>
              <div className="tradedetail-header-left">
                <div className="tradeDetail-header-Field">
                  Edit
                  <IconContext.Provider value={{ color: "#0d0a3f", size: 18 }}>
                    <RiEditLine />
                  </IconContext.Provider>
                </div>
                <div
                  className="tradeDetail-header-Field"
                  onClick={() => {
                    DeleteTradeHandler(trade.id);
                    onBackPress();
                  }}
                >
                  Delete{" "}
                  <IconContext.Provider value={{ color: "red", size: 15 }}>
                    <RiDeleteBinLine />
                  </IconContext.Provider>
                </div>
                <div
                  className="tradeDetail-header-Field"
                  onClick={() => onBackPress()}
                >
                  Close{" "}
                  <IconContext.Provider value={{ color: "#0d0a3f", size: 15 }}>
                    <RiCloseLine />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="details">
              <div className="left-details">
                <div className="tradeDeatil-withoutBorder">
                  <span className="tradeDetail-tag-name">Labels:</span>
                  <span className="detail-content" style={{ display: "flex" }}>
                    {trade.labels.map((item) => (
                      <div className="tradeDetail-label">
                        <MdOutlineLabel />
                        {item}
                      </div>
                    ))}
                  </span>
                </div>
                <div className="tradeDeatil-withoutBorder">
                  <span className="tradeDetail-tag-name">Account:</span>
                  <span className="detail-content">{trade.account}</span>
                </div>
                <div className="tradeDeatil-withoutBorder">
                  <span className="tradeDetail-tag-name">Symbol Name:</span>
                  <h4 className="tradeSymboleName">
                    {" "}
                    <br />
                    {trade.symbolName}
                  </h4>
                </div>
                <div className="boxed-detail">
                  <div className="account-details">
                    <div className="account-detail-type">Trade Side:</div>
                    <div
                      className="account-detail-value"
                      style={{
                        color: trade.tradeSide === "Buy" ? "green" : "red",
                      }}
                    >
                      {trade.tradeSide}
                    </div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Entry Date:</div>
                    <div className="account-detail-value">
                      {trade.entryDate}
                    </div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Entry Price:</div>
                    <div className="account-detail-value">
                      {trade.entryPrice}
                    </div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Quantity:</div>
                    <div className="account-detail-value">{trade.quantity}</div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Amount Invested:</div>
                    <div className="account-detail-value">
                      {trade.amountInvested}
                    </div>
                  </div>
                </div>
                <div className="boxed-detail">
                  <div className="account-details">
                    <div className="account-detail-type">Exit Date:</div>
                    <div className="account-detail-value">{trade.exitDate}</div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Entry Price:</div>
                    <div className="account-detail-value">
                      {trade.exitPrice}
                    </div>
                  </div>
                </div>
                <div className="boxed-detail">
                  <div className="account-details">
                    <div className="account-detail-type">Stop Loss:</div>
                    <div className="account-detail-value">{trade.stopLoss}</div>
                  </div>
                  <div className="account-details">
                    <div className="account-detail-type">Take Profit:</div>
                    <div className="account-detail-value">
                      {trade.takeProfit}
                    </div>
                  </div>
                </div>
                <div className="boxed-detail">
                  <div className="account-details">
                    <div className="account-detail-type">Brokerage & Tax:</div>
                    <div className="account-detail-value">
                      {trade.brokerageTax}
                    </div>
                  </div>
                </div>
                <span
                  className="tradeDetail-tag-name"
                  style={{ textAlign: "left" }}
                >
                  Risk & Reward
                </span>
                <div className="tradedeayils-risk">
                  <div>Trade Result: {trade.tradeResult}</div>
                  <div>Profit&Loss: {trade.profitLossValue}</div>
                  <div>Profit&Loss %: {trade.profitLosspercent}</div>
                </div>
              </div>
              <div className="right-details">
                <div style={{ height: "500px" }}>
                  <h3 className="tradeDetail-tag-name">Stock Chart</h3>
                  <StockChart symbolName={trade.symbolName} />
                </div>
                <div className="trade-notes">
                  <h3 className="tradeDetail-tag-name">Trade Notes</h3>
                  <div>{trade.tradeNotes}</div>
                </div>
              </div>
            </div>
          </div>
        </TradeDetailCard>
      </div>
    </div>
  );
};

export default TradeDetail;

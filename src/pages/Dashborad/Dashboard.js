import React, { Children } from "react";
import "./Dashboard.css"; // Assuming a CSS file for styling
import { Link } from "react-router-dom";
import homeImg1 from "./../imagesPage/homeImg1.png";
import { RiListSettingsLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Heatmap from "../heatmap";
const pieData = [
  { name: "Winners", value: 50 },
  { name: "Losers", value: 25 },
  { name: "Open", value: 25 },
];
const COLORS = ["red", "#43e548", "#407ad8"];

const topWinners = [
  { shareName: "Reliance", value: "12%" },
  { shareName: "ITC", value: "10%" },
  { shareName: "SBIIN", value: "9%" },
  { shareName: "Hero", value: "8%" },
  { shareName: "Nifty", value: "7%" },
  { shareName: "Eur/Inr", value: "6%" },
  { shareName: "Jio", value: "5%" },
  { shareName: "Jio", value: "4%" },
  { shareName: "VI", value: "3%" },
  { shareName: "Airtel", value: "2%" },
];
const topLossers = [
  { shareName: "Reliance", value: "-12%" },
  { shareName: "ITC", value: "-10%" },
  { shareName: "SBIIN", value: "-9%" },
  { shareName: "Hero", value: "-8%" },
  { shareName: "Nifty", value: "-7%" },
  { shareName: "Eur/Inr", value: "-6%" },
  { shareName: "Jio", value: "-5%" },
  { shareName: "Jio", value: "-4%" },
  { shareName: "VI", value: "-3%" },
  { shareName: "Airtel", value: "-2%" },
];
const LineChartData = [
  {
    weekday: "Mon",
    price: 4000,
  },
  {
    weekday: "Tue",
    price: 3000,
  },
  {
    weekday: "Wed",
    price: 2000,
  },
  {
    weekday: "Thu",
    price: 2780,
  },
  {
    weekday: "Fri",
    price: 1890,
  },
];
function Dashboard() {
  function MenuItem({ label }) {
    return (
      <Link className="menu-item active" to={"/dashboard"}>
        {label}
      </Link>
    );
  }
  function Sidebar() {
    return (
      <div className="sidebar">
        <div className="dash-logo">
          <img src={homeImg1} alt="Journal My Trade" class="dashBanner-logo" />
        </div>
        <MenuItem label="Dashboard" />
        <MenuItem label="Journal" />
        <MenuItem label="Charts" />
        <MenuItem label="Notes" />
        <MenuItem label="Accounts" />
        <MenuItem label="Risk Management" />
      </div>
    );
  }
  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <RiListSettingsLine />
          <IoPersonCircleOutline />
        </IconContext.Provider>
      </div>
    );
  }
  function MainContent() {
    return (
      <div className="main-content">
        <MainHeader />
        <TradeSummary />
        <LineGraph />
      </div>
    );
  }
  function TradeDetailCard({ headline, subHeading, children }) {
    return (
      <div className="Trade-detail-card-main">
        <div className="Trade-detail-card-header-div">
          <div className="Trade-detail-card-header">{headline}</div>
          {subHeading && (
            <div className="Trade-detail-card-subheader">{subHeading}</div>
          )}
        </div>
        {children}
      </div>
    );
  }

  function TradeSummary() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard headline={"Total Trades"} subHeading={"150"}>
            <PieChart width={300} height={300}>
              <Legend
                payload={pieData.map((item, index) => ({
                  id: item.name,
                  type: "circle",
                  value: `${item.name} (${item.value})`,
                  color: COLORS[index % COLORS.length],
                }))}
              />

              <Pie
                data={pieData}
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </TradeDetailCard>
        </div>
        <div className="card-container">
          <TradeDetailCard headline={"Profit & Loss"}>
            <div className="profit-loss">
              <p>₹ 22,76,498/-</p>
            </div>
          </TradeDetailCard>
          <TradeDetailCard headline={"Profit & Loss"}>
            <div className="profit-loss">
              <p>₹ 22,76,498/-</p>
            </div>
          </TradeDetailCard>
        </div>
        <div className="card-container">
          <TradeDetailCard headline={"Top Winners"}>
            {topWinners.map((item) => (
              <div className="topwinners-list-component">
                <div>{item.shareName}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </TradeDetailCard>
        </div>

        <div className="card-container">
          <TradeDetailCard headline={"Top Lossers"}>
            {topLossers.map((item) => (
              <div className="topwinners-list-component">
                <div>{item.shareName}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  function LineGraph() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard headline={"Top Lossers"}>
            <div className="traide-linechart">
              <ResponsiveContainer width={"100%"} height={250}>
                <LineChart
                  data={LineChartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="weekday" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="red" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Dashboard;

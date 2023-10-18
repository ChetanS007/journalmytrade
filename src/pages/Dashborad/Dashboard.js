import React from "react";
import "./Dashboard.css";
import { RiListSettingsLine } from "react-icons/ri";
import { IoPersonCircleOutline, IoBookOutline } from "react-icons/io5";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CustomTable from "../../components/CustomTable";
import TradeDetailCard from "../../components/TradeDetailCard";
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
function getLast7MonthsStartAndEndDates() {
  const currentDate = new Date();
  const dates = [];

  for (let i = 0; i < 7; i++) {
    let endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    if (i === 0) {
      endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );
    }
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    dates.push({
      startDate: new Date(startOfMonth),
      endDate: new Date(endOfMonth),
    });

    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return dates.reverse();
}

// Call the function to get the last 7 months' start and end dates
const last7MonthsDates = getLast7MonthsStartAndEndDates();
function Dashboard() {
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const { logout } = useContext(AuthContext);

  const LogoutHandler = () => {
    logout();
  };
  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <RiListSettingsLine />
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
  function MainContent() {
    return (
      <div className="main-content">
        <MainHeader />
        <TradeSummary />
        <LineGraph />
        <HeatMapComponent />
        <TableCard />
      </div>
    );
  }

  function TradeSummary() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard headline={"Total Trades"} subHeading={"150"}>
            <div style={{ display: "flex", alignSelf: "center" }}>
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
            </div>
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

  function HeatMapComponent() {
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard>
            <div style={{ display: "flex" }}>
              {last7MonthsDates.map((month, index) => (
                <div style={{ flex: 1 }}>
                  <Heatmap
                    startDate={month.startDate}
                    endDate={month.endDate}
                  />
                </div>
              ))}
            </div>
          </TradeDetailCard>
        </div>
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
    ];
    return (
      <div className="trade-summary">
        <div className="card-container">
          <TradeDetailCard>
            <CustomTable rows={rows} showColumnName={false} />
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  return <MainContent />;
}

export default Dashboard;

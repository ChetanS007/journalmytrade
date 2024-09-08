import React from "react";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import StockChart from "../../components/StockChart";
import "./Charts.css";

export default function Chart() {
  return (
    <div className="main-content">
      <StockChart />
    </div>
  );
}

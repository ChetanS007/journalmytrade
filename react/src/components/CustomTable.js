import {
  Checkbox,
  StyledEngineProvider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "./CustomTable.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiTableHead from "@material-ui/core/TableHead";
import { BsGraphUpArrow, BsGraphDownArrow, BsInfoCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import moment from "moment/moment";

export default function CustomTable({
  rows,
  showColumnName,
  tradeDetailClick,
}) {
  const columns = [
    "",
    "Date",
    "Trade Type",
    "Segment",
    "Symbol Name",
    "Trade Side",
    "Qty",
    "Entry Price",
    "Exit Price",
    "Net P & L",
    "Return%",
    "Account",
    "",
  ];
  return (
    <StyledEngineProvider injectFirst>
      <Table sx>
        {showColumnName && (
          <TableHead>
            <TableRow className="MuiTableRow-root">
              {columns.map((item) => (
                <TableCell
                  sx={{ fontWeight: "600", color: "#0d0a3f", fontSize: "13px" }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        {Array.isArray(rows) && rows.length > 0 && (
          <TableBody>
            {rows.map((item) => {
              let profit = +item.entry_price - +item.exit_price;
              profit = profit < 0;
              return (
                <TableRow>
                  <Checkbox
                    sx={{ color: "#0d0a3f" }}
                    onChange={(items) => {
                      console.log(item);
                    }}
                  />
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {moment(item.date).format("DD-MMM-YYYY")}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.trade_type}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.segment}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#0d0a3f",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {item.symbol}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    <div style={{ marginLeft: "2px" }}>
                      {item.teadeside === "1" ? "Buy" : "Sell"}
                      {item.teadeside === "1" ? (
                        <IconContext.Provider
                          value={{ color: "green", size: 15 }}
                        >
                          <BsGraphUpArrow />
                        </IconContext.Provider>
                      ) : (
                        <IconContext.Provider
                          value={{ color: "red", size: 15 }}
                        >
                          <BsGraphDownArrow />
                        </IconContext.Provider>
                      )}
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.qty}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.entry_price}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.exit_price}
                  </TableCell>
                  <TableCell
                    sx={{ color: profit ? "green" : "red", fontSize: "13px" }}
                  >
                    {item.net_profit_loss}
                  </TableCell>
                  <TableCell
                    sx={{ color: profit ? "green" : "red", fontSize: "13px" }}
                  >
                    {item.return_percentage}%
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    {item.account}
                  </TableCell>
                  <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                    <IconContext.Provider
                      value={{ color: "#0d0a3f", size: 15 }}
                    >
                      <BsInfoCircle onClick={() => tradeDetailClick(item)} />
                    </IconContext.Provider>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
    </StyledEngineProvider>
  );
}
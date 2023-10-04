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
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function CustomTable({ rows, showColumnName }) {
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
        <TableBody>
          {rows.map((item) => {
            let profit = +item.EntryPrice - +item.ExitPrice;
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
                  {item.Date}
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.TradeType}
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.Segment}
                </TableCell>
                <TableCell
                  sx={{ color: "#0d0a3f", fontSize: "13px", fontWeight: "600" }}
                >
                  {item.Symbolname}
                </TableCell>
                <TableCell
                  sx={{ color: "#0d0a3f", fontSize: "13px", display: "flex" }}
                >
                  {item.Tradeside}
                  <div style={{ marginLeft: "2px" }}>
                    {item.Tradeside === "Buy" ? (
                      <IconContext.Provider
                        value={{ color: "green", size: 15 }}
                      >
                        <BsGraphUpArrow />
                      </IconContext.Provider>
                    ) : (
                      <IconContext.Provider value={{ color: "red", size: 15 }}>
                        <BsGraphDownArrow />
                      </IconContext.Provider>
                    )}
                  </div>
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.Qty}
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.EntryPrice}
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.ExitPrice}
                </TableCell>
                <TableCell
                  sx={{ color: profit ? "green" : "red", fontSize: "13px" }}
                >
                  {item.Net}
                </TableCell>
                <TableCell
                  sx={{ color: profit ? "green" : "red", fontSize: "13px" }}
                >
                  {item.Return}
                </TableCell>
                <TableCell sx={{ color: "#0d0a3f", fontSize: "13px" }}>
                  {item.Account}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledEngineProvider>
  );
}

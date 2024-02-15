// React component structure
import React, { useContext, useEffect, useState } from "react";
import "./TransactionCard.css"; // Importing the CSS file for styling
import CustomDropDown from "../CustomDropDown";
import { Button, Group, Stack } from "@mantine/core";
import {
  Legend,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../context/AuthContext";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";

// The main dashboard component
const TransactionCard = ({ accountdetails }) => {
  const { Transactions, deletTransactionhandler } = useContext(AuthContext);
  const data = {
    name: accountdetails.account_name,
    balance: accountdetails.balance,
    totalTrades: accountdetails.total_trade,
    wins: accountdetails.win,
    losses: accountdetails.loss,
    profitAndLoss: accountdetails.profit_and_loss_amount,
    profitAndLossPercentage: accountdetails.profit_and_loss_percentage,
    brokerageAndTax: accountdetails.broker_tax,
  };
  const formattedData = Transactions.map(({ account, date, amount }) => {
    if (account === accountdetails.id) {
      return {
        date: moment(date).format("D/MM/YYYY"),
        amount: amount,
      };
    }
  });
  const [transactionsByAccount, settransactionsByAccount] = useState([]);

  useEffect(() => {
    console.log(Transactions);
    const temp = Transactions.filter(
      (item) => item.account === accountdetails.id
    );
    settransactionsByAccount(temp);
  }, [Transactions, accountdetails.id]);

  return (
    <Group className="TransactionCard_dashboard" align="normal">
      <Stack className="transaction-left">
        <Summary data={data} />
        <AddTransactionForm id={accountdetails.id} />
      </Stack>
      <Stack className="transaction-right">
        <Graph data={formattedData} />
        <Transactionsform
          transactions={transactionsByAccount}
          deletTransactionhandler={deletTransactionhandler}
        />
      </Stack>
    </Group>
  );
};

// The summary component
const Summary = ({ data }) => {
  return (
    <div className="transaction_summmary_header">
      <div className="account-details">
        <div className="account-detail-type">Balance:</div>
        <div className="account-detail-value">₹{data.balance}</div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Total of Trades:</div>
        <div className="account-detail-value">₹{data.totalTrades}</div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Win:</div>
        <div className="account-detail-value">₹{data.wins}</div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Lose:</div>
        <div className="account-detail-value">₹{data.losses}</div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Profit and loss: </div>
        <div className="account-detail-value">{data.profitAndLoss}</div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Profit and loss %:</div>
        <div className="account-detail-value">
          ₹{data.profitAndLossPercentage}
        </div>
      </div>
      <div className="account-details">
        <div className="account-detail-type">Brokerage & Tax : </div>
        <div className="account-detail-value">₹{data.brokerageAndTax}</div>
      </div>
    </div>
  );
};

// The graph component (you would likely use a library like recharts or chart.js)
const Graph = ({ data }) => {
  return (
    <div className="graph">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// The transactions component
const Transactionsform = ({ transactions, deletTransactionhandler }) => {
  return (
    <div className="transactions">
      <div className="transaction_Header">
        <div>Date</div>
        <div>Transaction Type</div>
        <div>Amount</div>
        <div></div>
      </div>
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction">
          <div>{moment(transaction.date).format("D/MM/YYYY")}</div>
          <div>{transaction.transaction_type}</div>
          <div>₹{transaction.amount}</div>
          <div>
            <IconContext.Provider value={{ color: "red", size: 15 }}>
              <RiDeleteBinLine
                onClick={() => {
                  deletTransactionhandler(transaction.id);
                }}
              />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#0d0a3f", size: 15 }}>
              <AiTwotoneEdit />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  );
};

// The add transaction form component
const AddTransactionForm = ({ id }) => {
  const [formData, setFormData] = useState({
    date: "",
    transaction_type: "",
    amount: "",
    account: id,
  });
  const { AddTransactionHandler } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    AddTransactionHandler(formData);
    setFormData({
      date: "",
      transaction_type: "",
      amount: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack className="addTransactionForm" justify="center">
        <CustomDropDown
          label="Date"
          selectedValue={(item) => {
            setFormData({ ...formData, date: item });
          }}
          type={"date"}
          style={{ width: "100%" }}
        />
        <CustomDropDown
          label="Transaction Type"
          data={["Deposit", "Withdraw"]}
          selectedValue={(item) => {
            setFormData({ ...formData, transaction_type: item });
          }}
          type={"dropdown"}
          dropdownstyles={"dropdownstyles"}
        />
        <CustomDropDown
          label={"Amount"}
          selectedValue={(item) => {
            setFormData({ ...formData, amount: item });
          }}
          placeholder="Amount"
          type="number"
          style={{ width: "100%" }}
        />
        <Group>
          <Button size="md" variant={"secondary"} type="submit">
            Save
          </Button>
          <Button
            onClick={() => {}}
            size="md"
            variant={"primary"}
            type="button"
          >
            Cancel
          </Button>
        </Group>
      </Stack>
    </form>
  );
};

export default TransactionCard;

import React from "react";
import "./Accounts.css";
export default function Accounts() {
  const AccountCard = () => {
    const accountData = [
      {
        name: "Zerodha",
        balance: "₹30,300/-",
        totalTrades: 20,
        wins: 16,
        losses: 4,
      },
      // ... Add more accounts in a similar format if needed
    ];

    return (
      <div className="account-container">
        <div className="account-header">
          <h2>Accounts</h2>
          <button>Create Account</button>
        </div>
        <div className="account-cards">
          {accountData.map((account) => (
            <div className="account-card" key={account.name}>
              <div className="account-name">
                {account.name} <span className="arrow">▲</span>
              </div>
              <div className="account-balance">Balance: {account.balance}</div>
              <div className="account-trades">
                Total of Trades: {account.totalTrades}
              </div>
              <div className="account-wins">Wins: {account.wins}</div>
              <div className="account-losses">Losses: {account.losses}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <AccountCard />
    </div>
  );
}

import React, { createContext, useState, useEffect } from "react";
import {
  DeleteAccount,
  UpdateeAccountApi,
  addAccount,
  getAccounts,
  getTrade,
  logoutapi,
  deleteTrade,
  getUserDetails,
  getTranscations,
  addTransaction,
  DeleteTransactions,
} from "../apis/apicalls";
import Cookies from "js-cookie"; // Import the js-cookie library

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userDetails, setuserDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [alltrades, setalltrades] = useState([]);
  const [genraltrades, setgenraltrades] = useState({});
  const [AccountsDetail, setAccounts] = useState([]);
  const [Transactions, setTransactions] = useState([null]);
  const getAccountNamebyId = (id) => {
    const account = AccountsDetail.find((account) => account.id === id);
    return account ? account.account_name : null;
  };
  const getDetails = async () => {
    const UserInfo = await getUserDetails(
      Cookies.get("accessToken"),
      Cookies.get("userEmail")
    );
    if (UserInfo) {
      setuserDetails(UserInfo);
      const tradeinfo = await getTrade(Cookies.get("accessToken"));
      if (tradeinfo?.status === 200) {
        setalltrades(tradeinfo.data.Message[0]);
        setgenraltrades(tradeinfo.data.Message[1]);
      }
      const accounts = await getAccounts(Cookies.get("accessToken"));
      if (accounts?.status === 200) {
        setAccounts(accounts.data.Message);
      }
      const transactions = await getTranscations(Cookies.get("accessToken"));
      console.log(transactions);
      if (transactions?.status === 200) {
        setTransactions(transactions.data);
      }
    } else {
      logout();
    }
  };

  const deletAccounthandler = async (id) => {
    const responnse = await DeleteAccount(Cookies.get("accessToken"), id);
    if (responnse.status === 204) {
      const accounts = await getAccounts(Cookies.get("accessToken"));
      if (accounts?.status == 200) {
        setAccounts(accounts.data.Message);
      } else {
        window.location.reload();
      }
    }
  };

  const AddAccountHandler = async (data) => {
    const res = await addAccount(Cookies.get("accessToken"), data);
    console.log(res);
    if (res.status === 201) {
      const accounts = await getAccounts(Cookies.get("accessToken"));
      if (accounts?.status == 200) {
        setAccounts(accounts.data.Message);
        return true;
      } else {
        window.location.reload();
      }
    }
  };
  const AddTransactionHandler = async (data) => {
    const res = await addTransaction(Cookies.get("accessToken"), data);
    if (res.status === 200) {
      const transaction = await getTranscations(Cookies.get("accessToken"));
      if (transaction?.status == 200) {
        setTransactions(transaction.data);
        return true;
      } else {
        window.location.reload();
      }
    }
  };

  const deletTransactionhandler = async (id) => {
    const responnse = await DeleteTransactions(Cookies.get("accessToken"), id);
    if (responnse.status === 204) {
      const transaction = await getTranscations(Cookies.get("accessToken"));
      if (transaction?.status == 200) {
        setTransactions(transaction.data);
      } else {
        window.location.reload();
      }
    }
  };
  const updateAccountHandler = async (account, acoountname) => {
    const resp = await UpdateeAccountApi(
      { ...account, account_name: acoountname },
      Cookies.get("accessToken")
    );
    if (resp?.status === 200) {
      const accounts = await getAccounts(Cookies.get("accessToken"));
      if (accounts?.status == 200) {
        setAccounts(accounts.data.Message);
      }
    }
  };

  const DeleteTradeHandler = async (tradeId) => {
    const responnse = await deleteTrade(Cookies.get("accessToken"), tradeId);
    console.log(responnse);
    if (responnse.status === 204) {
      const tradeinfo = await getTrade(Cookies.get("accessToken"));
      if (tradeinfo?.status == 200) {
        setalltrades(tradeinfo.data.Message[0]);
        setgenraltrades(tradeinfo.data.Message[1]);
      } else {
        window.location.reload();
      }
    }
  };
  useEffect(() => {
    // Check cookies for tokens
    const storedRefreshToken = Cookies.get("refreshToken");
    const storedAccessToken = Cookies.get("accessToken");

    // If tokens exist in local storage, set them in the state
    if (storedRefreshToken && storedAccessToken) {
      setIsLoggedIn(true);
      setRefreshToken(storedRefreshToken);
      setAccessToken(storedAccessToken);
      getDetails();
    }

    // You can also add logic here to validate the tokens if needed.
  }, []);

  // You can create functions to update these states as needed, e.g., login and logout functions.

  const login = (refreshToken, accessToken, email) => {
    setIsLoggedIn(true);
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
    Cookies.set("userEmail", email, { expires: 1 / 24 });
    // Store tokens in cookies with a 1-day expiration
    Cookies.set("refreshToken", refreshToken, { expires: 1 / 24 }); // 1 day expiration
    Cookies.set("accessToken", accessToken, { expires: 1 / 24 }); // 1 day expiration
    getDetails();
  };

  const logout = async () => {
    const res = await logoutapi(localStorage.getItem("refreshToken"));
    if (res.Message === "Logout Successfull") {
      setIsLoggedIn(false);
      setRefreshToken(null);
      setAccessToken(null);
      // Remove tokens from cookies
      Cookies.remove("refreshToken");
      Cookies.remove("accessToken");
    }
  };

  // Pass the state and functions to the context provider's value prop
  const contextValue = {
    isLoggedIn,
    refreshToken,
    accessToken,
    genraltrades,
    alltrades,
    AccountsDetail,
    userDetails,
    Transactions,
    deletTransactionhandler,
    AddTransactionHandler,
    getAccountNamebyId,
    login,
    logout,
    deletAccounthandler,
    updateAccountHandler,
    AddAccountHandler,
    DeleteTradeHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
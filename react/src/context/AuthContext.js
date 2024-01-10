import React, { createContext, useState, useEffect } from "react";
import {
  DeleteAccount,
  UpdateeAccountApi,
  getAccounts,
  getTrade,
  logoutapi,
} from "../apis/apicalls";
import Cookies from "js-cookie"; // Import the js-cookie library

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [alltrades, setalltrades] = useState([]);
  const [genraltrades, setgenraltrades] = useState({});
  const [AccountsDetail, setAccounts] = useState([]);

  const getDetails = async () => {
    const tradeinfo = await getTrade(Cookies.get("accessToken"));
    if (tradeinfo?.status == 200) {
      setalltrades(tradeinfo.data[0]);
      setgenraltrades(tradeinfo.data[1]);
    }
    const accounts = await getAccounts(Cookies.get("accessToken"));
    if (accounts?.status == 200) {
      setAccounts(accounts.data.Message);
    }
  };

  const deletAccounthandler = async (id) => {
    const responnse = await DeleteAccount(Cookies.get("accessToken"), id);
    console.log(responnse);
    if (responnse.status === 204) {
      const accounts = await getAccounts(Cookies.get("accessToken"));
      if (accounts?.status == 200) {
        setAccounts(accounts.data.Message);
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

  const login = (refreshToken, accessToken) => {
    setIsLoggedIn(true);
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
    // Store tokens in cookies with a 1-day expiration
    Cookies.set("refreshToken", refreshToken, { expires: 1 }); // 1 day expiration
    Cookies.set("accessToken", accessToken, { expires: 1 }); // 1 day expiration
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
    login,
    logout,
    deletAccounthandler,
    updateAccountHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

import React, { createContext, useState, useEffect } from "react";
import { logoutapi } from "../apis/apicalls";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [refreshToken, setRefreshToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check local storage for tokens
    const storedRefreshToken = localStorage.getItem("refreshToken");
    const storedAccessToken = localStorage.getItem("accessToken");

    // If tokens exist in local storage, set them in the state
    if (storedRefreshToken && storedAccessToken) {
      setIsLoggedIn(true);
      setRefreshToken(storedRefreshToken);
      setAccessToken(storedAccessToken);
    }

    // You can also add logic here to validate the tokens if needed.
  }, []);

  // You can create functions to update these states as needed, e.g., login and logout functions.

  const login = (refreshToken, accessToken) => {
    setIsLoggedIn(true);
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
    // Store tokens in local storage
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("accessToken", accessToken);
  };

  const logout = async () => {
    const res = await logoutapi(localStorage.getItem("refreshToken"));
    console.log(res);
    if (res.Message === "Logout Successfull") {
      setIsLoggedIn(false);
      setRefreshToken(null);
      setAccessToken(null);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    }
  };

  // Pass the state and functions to the context provider's value prop
  const contextValue = {
    isLoggedIn,
    refreshToken,
    accessToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

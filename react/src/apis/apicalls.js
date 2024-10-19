import axios from "axios";
import { apiUrl } from "../config";
import fs, { access } from "fs";
import { toast } from "react-toastify";
const FormData = require("form-data");

export const loginApiCall = async (email, password) => {
  let data = JSON.stringify({
    username: email,
    password: password,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${apiUrl}api/login/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);

    return {
      Message: error.response.data.Message ?? "please try again later.",
    };
  }
};

export const registerApi = async (details) => {
  let data = new FormData();
  data.append("email", details.email);
  data.append("password", details.password);
  data.append("first_name", details.firstName);
  data.append("last_name", details.lastName);
  data.append("phone", details.mobileNo);
  data.append("country", details.country);
  data.append("currency", details.currency);
  data.append("finacial_year", details.finYeartype);
  data.append("confirm_password", details.confirmPassword);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${apiUrl}api/register/`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      Message: error.response.data.error ?? "please try again later.",
    };
  }
};

export const logoutapi = async (refreshToken) => {
  let data = JSON.stringify({
    refresh_token: refreshToken,
  });

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${apiUrl}api/logout/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return { Message: response.data[0].split(":")[1] };
  } catch (error) {
    console.log(error);
    return { Message: "Unable to logout" };
  }
};

export const getTrade = async (accesstoken) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/trade/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const response = await axios.request(config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const addAccount = async (accesstoken, accountDeatils) => {
  try {
    console.log(accountDeatils);
    let data = JSON.stringify({
      ...accountDeatils,
      account_creation_date: new Date(),
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/account/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response;
  } catch (error) {
    toast.error(error.response.data.error ?? "please try again later.");
    console.error(error);
  }
};
export const getAccounts = async (accesstoken) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/account/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAccount = async (accesstoken, id) => {
  try {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/account/${id}/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateeAccountApi = async (details, accesstoken) => {
  try {
    const data = JSON.stringify(details);
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/account/${details.id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const AddTrade = async (accesstoken, tradedata) => {
  try {
    let data = new FormData();
    data.append("account", tradedata.account);
    data.append("symbol", tradedata.symbol);
    data.append("segment", tradedata.segment);
    data.append("qty ", tradedata.qty);
    data.append("trade_type", tradedata.trade_type);
    data.append("teadeside", tradedata.teadeside);
    data.append("entry_price", tradedata.entry_price);
    data.append("entry_date", tradedata.entry_date);
    data.append("exit_price", tradedata.exit_price);
    data.append("exit_date", tradedata.exit_date);
    data.append("stop_loss", tradedata.stop_loss);
    data.append("take_profit", tradedata.take_profit);
    data.append("brokrage_tax", tradedata.brokrage_tax);
    data.append("profit_n_loss", tradedata.profit_n_loss);
    {
      tradedata.chart_img && data.append("chart_img", tradedata.chart_img);
    }
    data.append("trade_notes", tradedata.trade_type);
    data.append("date", tradedata.date);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/trade/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
      },
      data: data,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return {
      Message: error.response.data.error ?? "please try again later.",
    };
  }
};

// Define an async function
export const deleteTrade = async (accestoken, tradeId) => {
  // Create a config object
  let config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${apiUrl}api/trade/${tradeId}/`,
    headers: {
      Authorization: `Bearer ${accestoken}`,
    },
  };

  try {
    let response = await axios.request(config);
    // Handle the response
    console.log(response.data);
    return response;
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};

export const getUserDetails = async (accesstoken, userEmail) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/user/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        Cookie:
          "csrftoken=8ef7GFDjsyCTPPzIrF7PXZRYPJB4RVSR; sessionid=mj232qddbx9lwen1mylzcl1jo2ubfrw5",
      },
    };

    const response = await axios.request(config);

    const filteredMessages = response.data.Message.filter(
      (item) => item.email === userEmail
    );
    return filteredMessages[0];
  } catch (error) {
    return false;
  }
};

export const addTransaction = async (accesstoken, transactionDetails) => {
  try {
    let data = JSON.stringify({
      ...transactionDetails,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/transaction/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error ?? "please try again later.");
    return error;
  }
};
export const getTranscations = async (accesstoken) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/transaction/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteTransactions = async (accesstoken, id) => {
  try {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/transaction/${id}/`,
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};

export const UpdateeTranscations = async (details, accesstoken) => {
  try {
    const data = JSON.stringify(details);
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/account/${details.id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesstoken}`,
      },
      data: data,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

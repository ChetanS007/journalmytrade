import axios from "axios";
import { apiUrl } from "../config";
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

    return { Message: "Unsuccessfull login" };
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
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return { Message: "Unable to register" };
  }
};

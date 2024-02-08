import React, { useState } from "react";
import "./Accounts.css";
import { RiListSettingsLine } from "react-icons/ri";
import { IoPersonCircleOutline, IoBookOutline } from "react-icons/io5";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { AiOutlinePlusCircle, AiTwotoneEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AuthContext } from "../../context/AuthContext";
import TradeDetailCard from "../../components/TradeDetailCard";
import { BsInfoCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { UpdateeAccountApi, addAccount } from "../../apis/apicalls";
import { Link } from "react-router-dom";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Divider,
  Stack,
  Image,
} from "@mantine/core";

import { useForm } from "@mantine/form";

export default function Accounts({ onburgerclick }) {
  const [isaccountMOdalopen, setisaccountMOdalopen] = useState(false);
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const [editaccountnameArray, seteditaccountnameArray] = useState([]);
  const {
    logout,
    AccountsDetail,
    deletAccounthandler,
    updateAccountHandler,
    AddAccountHandler,
  } = React.useContext(AuthContext);
  const LogoutHandler = () => {
    logout();
  };
  const updateAccountNAme = async (account, newName) => {
    await updateAccountHandler(account, newName);
    let temp = [];
    editaccountnameArray?.forEach((item) => {
      item.isActive = false;
      temp.push(item);
    });
    seteditaccountnameArray(temp);
  };
  React.useEffect(() => {
    let array_temp = [];
    console.log(AccountsDetail);
    AccountsDetail?.forEach((element) => {
      let temp = {};
      temp.id = element.id;
      temp.isActive = false;
      array_temp.push(temp);
    });
    seteditaccountnameArray(array_temp);
  }, [AccountsDetail]);

  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <RiListSettingsLine onClick={onburgerclick} />
          <div onClick={() => setshowlogutmodal(!showlogutmodal)}>
            <IoPersonCircleOutline />
            {showlogutmodal && (
              <IconContext.Provider value={{ color: "#0d0a3f", size: 20 }}>
                <div className="popup-main">
                  <p className="popup-head">Name</p>
                  <div className="popup-item">
                    <Link className="popup-itemname" to={"/Profile"}>
                      Setting
                    </Link>{" "}
                    <FiSettings />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Subscription</span>
                    <MdOutlineSubscriptions />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Support</span>
                    <GoQuestion />
                  </div>
                  <div className="popup-item">
                    <span className="popup-itemname">Learning</span>
                    <IoBookOutline />
                  </div>
                  <div className="popup-item" onClick={LogoutHandler}>
                    <span className="popup-itemname">logout</span>
                    <FiLogOut />
                  </div>
                </div>
              </IconContext.Provider>
            )}
          </div>
        </IconContext.Provider>
      </div>
    );
  }
  const AccountCard = () => {
    const form = useForm({
      initialValues: {
        account_name: "",
        balance: null,
        total_trade: null,
        win: null,
        loss: null,
        profit_and_loss_amount: null,
        profit_and_loss_percentage: null,
        broker_tax: null,
      },

      validate: {
        account_name: (val) =>
          val !== "" ? null : "Account Name is compulsory field",
      },
    });

    const addAccountHandler = async (e) => {
      e.preventDefault();
      console.log(form.values);
      await AddAccountHandler(form.values);
    };
    return (
      <div className="trade-summary" style={{ height: "100%" }}>
        <div className="card-container">
          <TradeDetailCard>
            <div className="account-container">
              <div className="account-header">
                <IconContext.Provider value={{ color: "#fffff", size: 20 }}>
                  <h2 className="account-header-text">Accounts</h2>
                  <button
                    className="create-button"
                    onClick={() => {
                      setisaccountMOdalopen(true);
                    }}
                  >
                    <div className="create-button-text"> Create Account </div>
                    <AiOutlinePlusCircle />
                  </button>
                </IconContext.Provider>
              </div>
              {AccountsDetail.length > 0 && (
                <div className="account-cards">
                  {AccountsDetail.map((account, index) => (
                    <div className="account-card">
                      <div className="account-name">
                        {!editaccountnameArray[index]?.isActive ? (
                          <>
                            {account.account_name}

                            <IconContext.Provider
                              value={{ color: "#0d0a3f", size: 15 }}
                            >
                              <a id={`clickable${account.id}`}>
                                <BsInfoCircle />
                              </a>
                            </IconContext.Provider>
                          </>
                        ) : (
                          <EditName
                            defaultvalue={account.account_name}
                            onClickHanler={(newName) =>
                              updateAccountNAme(account, newName)
                            }
                          />
                        )}
                        <Tooltip
                          anchorSelect={`#clickable${account.id}`}
                          className="tooltip-main"
                          style={{
                            backgroundColor: "#fff",
                            color: "black",
                            width: "250px",
                          }}
                          clickable
                        >
                          <div>
                            <div
                              className="popup-item"
                              onClick={() => {
                                let temp = [];
                                editaccountnameArray.forEach((item) => {
                                  if (item.id === account.id) {
                                    item.isActive = true;
                                  } else {
                                    item.isActive = false;
                                  }
                                  temp.push(item);
                                });
                                seteditaccountnameArray(temp);
                              }}
                            >
                              <span className="popup-itemname">
                                Edit Account Name
                              </span>
                              <IconContext.Provider
                                value={{ color: "#0d0a3f", size: 15 }}
                              >
                                <AiTwotoneEdit />
                              </IconContext.Provider>
                            </div>
                            <div
                              className="popup-item"
                              onClick={() => {
                                deletAccounthandler(account.id);
                              }}
                            >
                              <span className="popup-itemname">
                                Delete Account
                              </span>
                              <IconContext.Provider
                                value={{ color: "red", size: 15 }}
                              >
                                <RiDeleteBinLine />
                              </IconContext.Provider>
                            </div>
                          </div>
                        </Tooltip>
                      </div>
                      <div className="account-diver"></div>
                      <div className="account-details ">
                        <div className="account-detail-type">Balance:</div>
                        <div className="account-detail-value">
                          {account.balance}
                        </div>
                      </div>

                      <div className="account-details">
                        <div className="account-detail-type">
                          Total of Trades:
                        </div>
                        <div className="account-detail-value">
                          {account.total_trade}
                        </div>
                      </div>
                      <div className="account-details">
                        <div className="account-detail-type">Wins:</div>
                        <div
                          className="account-detail-value"
                          style={{ color: "green" }}
                        >
                          {account.win}
                        </div>
                      </div>
                      <div className="account-details">
                        <div className="account-detail-type">Losses:</div>
                        <div
                          className="account-detail-value"
                          style={{ color: "red" }}
                        >
                          {account.loss}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TradeDetailCard>
          <Modal
            opened={isaccountMOdalopen}
            onClose={() => {
              setisaccountMOdalopen(false);
            }}
            centered
          >
            <form onSubmit={addAccountHandler}>
              <Stack>
                <TextInput
                  required
                  label="Account Name"
                  placeholder="Account Name"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue(
                      "account_name",
                      event.currentTarget.value
                    )
                  }
                  radius="md"
                  error={form.errors.account_name}
                />
                <TextInput
                  required
                  label="Balance"
                  placeholder="Balance"
                  value={form.values.balance}
                  onChange={(event) =>
                    form.setFieldValue("balance", event.currentTarget.value)
                  }
                  radius="md"
                  type="number"
                />
                <TextInput
                  required
                  label="Total Trades"
                  placeholder="Total Trades"
                  value={form.values.total_trade}
                  onChange={(event) =>
                    form.setFieldValue("total_trade", event.currentTarget.value)
                  }
                  radius="md"
                  type="number"
                />
                <TextInput
                  required
                  label="win"
                  placeholder="win"
                  value={form.values.win}
                  onChange={(event) =>
                    form.setFieldValue("win", event.currentTarget.value)
                  }
                  radius="md"
                  type="number"
                />
                <TextInput
                  required
                  label="Profit and loss amount"
                  placeholder="Profit and loss amount"
                  value={form.values.profit_and_loss_amount}
                  onChange={(event) =>
                    form.setFieldValue(
                      "profit_and_loss_amount",
                      event.currentTarget.value
                    )
                  }
                  radius="md"
                  type="number"
                />
                <TextInput
                  required
                  label="Profit and loss percentage"
                  placeholder="Profit and loss percentage"
                  value={form.values.profit_and_loss_percentage}
                  onChange={(event) =>
                    form.setFieldValue(
                      "profit_and_loss_percentage",
                      event.currentTarget.value
                    )
                  }
                  radius="md"
                  type="number"
                />
                <TextInput
                  required
                  label="Broker Tax"
                  placeholder="Broker tax"
                  value={form.values.broker_tax}
                  onChange={(event) =>
                    form.setFieldValue("broker_tax", event.currentTarget.value)
                  }
                  radius="md"
                  type="number"
                />
                <Button variant="primary" radius="md" mt={"md"} type="submit">
                  Add Account
                </Button>
              </Stack>
            </form>
          </Modal>
        </div>
      </div>
    );
  };

  return (
    <div className="main-content">
      <MainHeader />
      <AccountCard />
    </div>
  );
}
const EditName = ({ defaultvalue, onClickHanler }) => {
  const [acoountname, setaccountname] = useState(defaultvalue);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        value={acoountname}
        className="account-edit-input"
        onChange={(e) => {
          setaccountname(e.target.value);
        }}
      />
      <button
        className="create-button editbutton"
        onClick={() => {
          onClickHanler(acoountname);
        }}
      >
        Update
      </button>
    </div>
  );
};

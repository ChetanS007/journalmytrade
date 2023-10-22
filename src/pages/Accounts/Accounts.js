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
import { UpdateeAccountApi } from "../../apis/apicalls";
export default function Accounts() {
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const [editaccountnameArray, seteditaccountnameArray] = useState([]);
  const [acoountname, setaccountname] = useState("");
  const { logout, AccountsDetail, deletAccounthandler, updateAccountHandler } =
    React.useContext(AuthContext);
  const LogoutHandler = () => {
    logout();
  };
  const updateAccountNAme = async (account) => {
    await updateAccountHandler(account, acoountname);
    let temp = [];
    editaccountnameArray.forEach((item) => {
      item.isActive = false;
      temp.push(item);
    });
    seteditaccountnameArray(temp);
  };
  React.useEffect(() => {
    let array_temp = [];
    AccountsDetail.forEach((element) => {
      let temp = {};
      temp.id = element.id;
      temp.isActive = false;
      array_temp.push(temp);
    });
    seteditaccountnameArray(array_temp);
  }, []);

  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <RiListSettingsLine />
          <div onClick={() => setshowlogutmodal(!showlogutmodal)}>
            <IoPersonCircleOutline />
            {showlogutmodal && (
              <IconContext.Provider value={{ color: "#0d0a3f", size: 20 }}>
                <div className="popup-main">
                  <p className="popup-head">Name</p>
                  <div className="popup-item">
                    <span className="popup-itemname">Setting</span>
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
    return (
      <div className="trade-summary" style={{ height: "100%" }}>
        <div className="card-container">
          <TradeDetailCard>
            <div className="account-container">
              <div className="account-header">
                <IconContext.Provider value={{ color: "#fffff", size: 20 }}>
                  <h2 className="account-header-text">Accounts</h2>
                  <button className="create-button">
                    <div className="create-button-text"> Create Account </div>
                    <AiOutlinePlusCircle />
                  </button>
                </IconContext.Provider>
              </div>
              <div className="account-cards">
                {AccountsDetail.map((account, index) => (
                  <div className="account-card" key={account.account_name}>
                    <div className="account-name">
                      {!editaccountnameArray[index]?.isActive ? (
                        account.account_name
                      ) : (
                        <input
                          value={acoountname}
                          className="account-edit-input"
                          onChange={(e) => {
                            setaccountname(e.target.value);
                          }}
                        />
                      )}

                      {!editaccountnameArray[index]?.isActive ? (
                        <IconContext.Provider
                          value={{ color: "#0d0a3f", size: 15 }}
                        >
                          <a id={`clickable${account.id}`}>
                            <BsInfoCircle />
                          </a>
                        </IconContext.Provider>
                      ) : (
                        <button
                          className="create-button editbutton"
                          onClick={() => {
                            updateAccountNAme(account);
                          }}
                        >
                          Update
                        </button>
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
            </div>
          </TradeDetailCard>
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

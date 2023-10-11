import React, { useContext } from "react";
import { RiListSettingsLine } from "react-icons/ri";
import { IoPersonCircleOutline, IoBookOutline } from "react-icons/io5";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions, MdOutlineLabel } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { IconContext } from "react-icons";
import { AuthContext } from "../../context/AuthContext";
import TradeDetailCard from "../../components/TradeDetailCard";

import "./Notes.css";

const TraderNotes = [
  { Label: "label 1", isActive: false },
  { Label: "label 2", isActive: false },
  { Label: "label 3", isActive: true },
  { Label: "label 4", isActive: false },
];
export default function Notes() {
  const [showlogutmodal, setshowlogutmodal] = React.useState(false);
  const { logout } = React.useContext(AuthContext);

  function MainHeader() {
    return (
      <div className="dashboard-header">
        <IconContext.Provider value={{ color: "#0d0a3f", size: 30 }}>
          <div></div>
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
                  <div
                    className="popup-item"
                    onClick={() => {
                      logout();
                    }}
                  >
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

  function NotesSideBar() {
    return (
      <div className="trade-summary notes-side">
        <div className="card-container">
          <TradeDetailCard>
            <div style={{ width: "60%", alignSelf: "center" }}>
              <IconContext.Provider value={{ color: "#0d0a3f", size: 18 }}>
                <div className="notes-side-main">
                  <div className="notes-side-content">
                    <GrNotes />{" "}
                    <div style={{ marginLeft: "10px" }}>Traders Notes</div>
                  </div>
                  {TraderNotes.map((item) => (
                    <IconContext.Provider
                      value={
                        !item.isActive
                          ? { color: "#0d0a3f", size: 18 }
                          : { color: "#ffff", size: 18 }
                      }
                    >
                      <div
                        className={
                          item.isActive
                            ? "notes-side-content-active"
                            : "notes-side-content"
                        }
                      >
                        <MdOutlineLabel />
                        <div style={{ marginLeft: "10px" }}>{item.Label}</div>
                      </div>
                    </IconContext.Provider>
                  ))}
                </div>
              </IconContext.Provider>
            </div>
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  function NotesMain() {
    return (
      <div className="trade-summary notes-main">
        <div className="card-container">
          <TradeDetailCard>
            <div className="notes-side-main notes-main-card">
              <div className="notes-card-cont">
                <h4 className="notes-card-head">Heading</h4>
                <p className="notes-card-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="notes-card-cont">
                <h4 className="notes-card-head ">Heading</h4>
                <p className="notes-card-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </div>

              <div className="notes-card-cont">
                <h4 className="notes-card-head ">Heading</h4>
                <p className="notes-card-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="notes-card-cont">
                <h4 className="notes-card-head ">Heading</h4>
                <p className="notes-card-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </TradeDetailCard>
        </div>
      </div>
    );
  }
  return (
    <div className="main-content">
      <MainHeader />
      <div className="notes-main-cont">
        <NotesSideBar />
        <NotesMain />
      </div>
    </div>
  );
}
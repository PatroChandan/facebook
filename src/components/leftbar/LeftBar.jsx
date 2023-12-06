import React from "react";
import "./leftbar.css";
import { Link } from "react-router-dom";
import CurrentUser from "../../FackApis/CurrentUserData";
import Friend from "../../assets/icon/1.png";
import Groups from "../../assets/icon/2.png";
import Market from "../../assets/icon/3.png";
import Watch from "../../assets/icon/4.png";
import gallery from "../../assets/icon/5.png";
import videos from "../../assets/icon/6.png";
import message from "../../assets/icon/7.png";

const LeftBar = () => {
  const user = JSON.parse(localStorage.getItem("facebook-user"));

  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          <Link to={"/profile/id"}>
            <div className="user">
              <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
              <h4>{user.name}</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Friend} alt="" />
              <h4>Friends</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>
        </div>
        <hr />
        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
          <Link to={"/comming"}>
            <div className="item">
              <img src={gallery} alt="" />
              <h4>Gallery</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={videos} alt="" />
              <h4>Videos</h4>
            </div>
          </Link>
          <Link to={"/comming"}>
            <div className="item">
              <img src={message} alt="" />
              <h4>Message</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

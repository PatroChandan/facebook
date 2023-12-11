import React, { useState } from "react";
import "./chatbox.css";
import Stories from "../../components/stories/Stories";
import CurrentUser from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("facebook-user"))
  );
  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={localStorage.getItem("profileImage")} alt="" />
          <div className="user-name">
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
          </div>
        </div>
        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder="Write Somthing" />
            <button type="submit" className="btn btn-primary">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label className="btn btn-primary" htmlFor="file">
              <input type="file" id="file" />
              <FontAwesomeIcon icon={faFileAlt} />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

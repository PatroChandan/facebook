import React from "react";
import "./chatbox.css";
import Stories from "../../components/stories/Stories";
import CurrentUser from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
          <div className="user-name">
            <h3>{CurrentUser.map((user) => user.name)}</h3>
            <h5>{CurrentUser.map((user) => user.username)}</h5>
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

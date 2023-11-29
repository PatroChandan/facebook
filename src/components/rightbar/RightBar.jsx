import React from "react";
import "./rightBar.css";
import Message from "../message/Message";
import FriendReqe from "../friendReqe/FriendReqe";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightbar-container">
        <Message />
        <FriendReqe />
      </div>
    </div>
  );
};

export default RightBar;

import React from "react";
import "./rightBar.css";
import Message from "../message/Message";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightbar-container">
        <Message />
      </div>
    </div>
  );
};

export default RightBar;

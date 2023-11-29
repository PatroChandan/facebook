import React, { useState } from "react";
import "./feeds.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faListDots,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../comments/Comments";

const Feed = ({ fed }) => {
  const [openComment, setOpenComment] = useState(false);
  const commentHandler = () => {
    setOpenComment(!openComment);
  };
  return (
    <div className="feed" key={fed.userid}>
      <div className="top-content">
        <Link to={"/profile/id"}>
          <div className="user">
            <img src={fed.feedProfile} alt="" />
            <div>
              <h5>{fed.name}</h5>
              <small>1 Minute Ago</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt="" />
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faThumbsUp} /> 14 Likes
          </span>
        </div>
        <div className="action-item" onClick={commentHandler}>
          <span>
            <FontAwesomeIcon icon={faComment} /> 2 Comment
          </span>
        </div>
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} /> 1 Share
          </span>
        </div>
      </div>
      {openComment && <Comments />}
    </div>
  );
};

export default Feed;

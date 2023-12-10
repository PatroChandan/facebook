import React, { useState } from "react";
import "./feeds.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faListDots,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "../comments/Comments";
import { toast } from "react-toastify";

const Feed = ({ fed }) => {
  const [openComment, setOpenComment] = useState(false);
  const navigate = useNavigate();

  const commentHandler = () => {
    setOpenComment(!openComment);
  };
  const likeHandle = async (postId) => {
    const token = localStorage.getItem("facebook-token");
    const id = postId;
    console.log("id", id);
    try {
      const liked = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "f104bi07c490",
          },
        }
      );
      // if (liked.status === "success") {
      const res = await liked.json();
      console.log("liked", res);

      if (res.status === "success") {
        toast.success(res.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error while liking:", error);
      toast.error("An error occurred while processing your request.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleNavigate = () => {
    console.log("fed", fed);
    navigate("/visitProfile", { state: fed });
  };

  return (
    <div className="feed" key={fed?._id}>
      <div className="top-content">
        {/* <Link to={"/profile/id"}> */}
        <div className="user" onClick={handleNavigate}>
          <img src={fed?.author?.profileImage} alt="" />
          <div>
            <h5>{fed?.author?.name}</h5>
            <small>1 Minute Ago</small>
          </div>
        </div>
        {/* </Link> */}
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed?.content}</p>
        <img src={fed?.channel?.image} alt="" />
      </div>
      <div className="bottom-content">
        <div className="action-item" onClick={() => likeHandle(fed?._id)}>
          <span>
            <FontAwesomeIcon icon={faThumbsUp} /> {fed?.likeCount} Likes
          </span>
        </div>
        <div className="action-item" onClick={commentHandler}>
          <span>
            <FontAwesomeIcon icon={faComment} /> {fed?.commentCount} Comment
          </span>
        </div>
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} /> 1 Share
          </span>
        </div>
      </div>
      {openComment && <Comments postId={fed?._id} />}
    </div>
  );
};

export default Feed;

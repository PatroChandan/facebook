import React from "react";
import "./comment.css";
import CommentData from "../../FackApis/CommentData";
import CurrentUser from "../../FackApis/CurrentUserData";
import { Link } from "react-router-dom";

const Comments = () => {
  return (
    <div className="comments">
      <div className="writebox">
        <form action="#">
          <div className="user">
            <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
      {CommentData.map((comment) => (
        <Link to={"/profile/id"}>
          <div className="user" key={comment.id}>
            <img src={comment.commentProfile} alt="" />
            <div>
              <h5>{comment.name}</h5>
              <p>{comment.CommeText}</p>
            </div>
            <small>1h</small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Comments;

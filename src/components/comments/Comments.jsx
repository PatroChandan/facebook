import React, { useEffect, useState } from "react";
import "./comment.css";
import CurrentUser from "../../FackApis/CurrentUserData";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Comments = ({ postId, incrementCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("facebook-user"))
  );

  useEffect(() => {
    const token = localStorage.getItem("facebook-token");
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              projectID: "f104bi07c490",
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
        if (res.status === "success") {
          setComments(res.data);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchComments();
  }, [postId, comments]);

  const commentSend = () => {
    const token = localStorage.getItem("facebook-token");
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c410");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify({
      content: commentText,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      ` https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "success") {
          // Create a new comment object that matches the structure of your existing comments
          const newComment = {
            id: result.data._id,
            commentProfile: localStorage.getItem("profileImage"), // or wherever you store the profile image
            name: user.name, // or wherever you store the user's name
            content: result.data.content,
          };
          // Add the new comment to the comments state
          setComments([...comments, newComment]);
          // Clear the comment text
          setCommentText("");
          incrementCommentCount();
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="comments">
      <div className="writebox">
        <form action="#">
          <div className="user">
            <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
            <input
              type="text"
              placeholder="Write a comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                commentSend();
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {comments.map((comment) => (
        <Link to={"/profile/id"}>
          <div className="user" key={comment.id}>
            <img src={comment.commentProfile} alt="" />
            <div>
              <h5>{comment.name}</h5>
              <p>{comment.content}</p>
            </div>
            <small>1h</small>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Comments;

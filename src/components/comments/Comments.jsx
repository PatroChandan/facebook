import React, { useEffect, useState } from "react";
import "./comment.css";
import CurrentUser from "../../FackApis/CurrentUserData";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import comentprofile from "../../assets/img/feed2.jpg";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState();

  var key = "content";

  var obj = {};

  obj[key] = commentText;

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
          const commentsWithTime = res.data.map((comment) => ({
            ...comment,
            time: comment.createdAt,
          }));
          setComments(commentsWithTime);
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
    myHeaders.append("projectID", "f104bi07c490");
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
      `https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setComments(...Comments, response.data);
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        return response.text();
      })
      .then((result) => console.log(result))
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
            <img src={comentprofile} alt="" />
            <div>
              <h5>{comment.name}</h5>
              <p>{comment.content}</p>
            </div>
            <small style={{ fontSize: "12px" }}>
              {new Date(comment.time).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
              })}
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Comments;

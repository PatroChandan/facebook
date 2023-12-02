import React, { useState } from "react";
import "./addPost.css";
import CurrentUser from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    setImage(file);
  };

  const addPost = async () => {
    const token = localStorage.getItem("facebook-token");
    // const posting = await fetch(
    //   "https://academics.newtonschool.co/api/v1/facebook/post/",
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       projectID: "f104bi07c490",
    //     },
    //     body: {
    //       title: title,
    //       content: textValue,
    //       images: image,
    //     },
    //   }
    // );
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c490");
    myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("title", "time");
    formdata.append("content", textValue);
    formdata.append("images", image, "/C:/Users/chand/OneDrive/Pictures/");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post",
      requestOptions
    )
      .then((response) => {
        console.log("res", response);
        return response;
      })
      .then((result) => {
        console.log("result", result);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });

    // if (posting.status === "success") {
    //   toast.success(posting.message, {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // } else {
    //   toast.error(posting.message, {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    // }
  };
  return (
    <form className="postForm">
      <div className="user form-top">
        <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
        <input
          type="text"
          placeholder="What's on your mind ?"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" onClick={addPost}>
          Post
        </button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleImageChange} />
          <span>
            <FontAwesomeIcon icon={faImage} /> Photos
          </span>
        </label>
        <label htmlFor="file">
          <input type="file" id="file" onChange={handleImageChange} />
          <span>
            <FontAwesomeIcon icon={faVideo} /> Videos
          </span>
        </label>
        <span>
          <FontAwesomeIcon icon={faTags} /> Tag
        </span>
        <span>
          <FontAwesomeIcon icon={faSmile} /> Feelings
        </span>
      </div>
    </form>
  );
};

export default AddPost;

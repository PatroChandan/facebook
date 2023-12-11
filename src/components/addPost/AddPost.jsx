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
import axios from "axios";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log("file", file);
    setImageURL(URL.createObjectURL(file));
    setImage(file);
  };
  const addPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("facebook-token");
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c490");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("title", "title");
    formdata.append("content", textValue);
    formdata.append("images", image);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const resp = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setTextValue("");
          setImage(null);
          setImageURL(null);
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        return response;
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <form className="postForm">
      <div className="user form-top">
        <img src={localStorage.getItem("profileImage")} alt="" />
        <input
          type="text"
          placeholder="What's on your mind ?"
          value={textValue}
          onChange={(e) => {
            e.preventDefault();
            setTextValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => addPost(e)}
        >
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
      {image && (
        <div>
          <img src={imageURL} alt="Preview" />
        </div>
      )}
    </form>
  );
};

export default AddPost;

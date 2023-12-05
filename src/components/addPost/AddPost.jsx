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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    setImage(URL.createObjectURL(e.target.files[0]));
    // setImage(e.target.files[0]);
  };
  console.log("path", image);
  const addPost = async () => {
    const token = localStorage.getItem("facebook-token");
    // const posting = await fetch(
    //   "https://academics.newtonschool.co/api/v1/facebook/post/",
    //   {
    //     method: "POST",
    //     headers: {
    // "Content-Type":"multipart/form-data"
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

    // ------------------
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c490");
    myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Content-Length:", "2740");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("title", "time");
    formdata.append("content", textValue);
    formdata.append("images", image.name, image);

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
    // ---------------------------------------------

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("content", textValue);
    // formData.append("images", image);

    // try {
    //   const response = await axios.post(
    //     "https://academics.newtonschool.co/api/v1/facebook/post",

    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         projectID: "f104bi07c490",
    //         "Content-Type": "multipart/form-data",
    //       },
    //       body: formData,
    //     }
    //   );

    //   console.log("response", response.data);

    //   if (response.data.status === "success") {
    //     toast.success(response.data.message, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
    //   } else {
    //     toast.error(response.data.message, {
    //       position: toast.POSITION.TOP_CENTER,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error adding post:", error);
    // }

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
      {image && (
        <div>
          <img src={image} alt="Preview" />
          {/* {uploadPercentage > 0 && (
            <progress value={uploadPercentage} max="100" />
          )} */}
        </div>
      )}
    </form>
  );
};

export default AddPost;

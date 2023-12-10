import React, { useEffect, useState } from "react";
import "./useProfile.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";
import Feed from "../feeds/Feed";
import axios from "axios";

const VisitProfile = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log("serch name", location.state?.author?.name);
    const getResult = async () => {
      try {
        let response = await axios.get(
          `https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"${location.state?.author?.name}"}`,
          {
            headers: {
              projectID: "f104bi07c490",
            },
          }
        );

        setPosts(response.data.data);
        console.log("post1", response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getResult();
  }, []);
  // console.log("post2", posts);
  return (
    <>
      <div className="userProfile">
        <div className="cover-photos">
          <label htmlFor="cover" className="cover-picture">
            <img src={""} alt="" />
          </label>
          <input
            type="file"
            name="cover"
            id="cover"
            style={{ display: "none" }}
          />
        </div>
        <div className="profile-info">
          <label htmlFor="profile" className="profile-picture">
            <img
              src={location.state?.author?.profileImage}
              alt=""
              id="profileImg"
            />
          </label>
          <input
            type="file"
            name="profile"
            id="profile"
            style={{ display: "none" }}
          />
          <div className="user-name">
            <h3>{location.state?.author?.name}</h3>
            <h5>{}</h5>
          </div>
          <div className="profile-button">
            <Link to={"/chatbox/id"}>
              <button className="btn btn-primary">
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </Link>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faFeed} />
              Follow Me
            </button>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faLink} />
            </button>
          </div>
        </div>
      </div>
      <div className="feeds">
        {posts?.map((fed) => (
          <Feed fed={fed} key={fed._id} />
        ))}
      </div>
    </>
  );
};

export default VisitProfile;

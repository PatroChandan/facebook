import React, { useState } from "react";
import "./useProfile.css";
import CurrentUser from "../../FackApis/CurrentUserData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeed,
  faLink,
  faMessage,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("facebook-user"))
  );
  const [bio, setBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);

  const handleBioChange = (e) => {
    // e.preventDefault();
    setBio(e.target.value);
    const updateBio = { ...user };
    updateBio.bio = bio;
    setUser(updateBio);
    localStorage.setItem("facebook-user", JSON.stringify(updateBio));
  };

  const handleImageChange = (e) => {
    const updatedUser = { ...user };
    if (e.target.name === "profile") {
      updatedUser.ProfileImage = URL.createObjectURL(e.target.files[0]);
    } else {
      updatedUser.CoverPhoto = URL.createObjectURL(e.target.files[0]);
    }
    setUser(updatedUser);
    localStorage.setItem("facebook-user", JSON.stringify(updatedUser));
  };

  const toggleBioEditing = () => {
    setIsEditingBio(!isEditingBio);
  };

  return (
    <div className="userProfile">
      <div className="cover-photos">
        <label htmlFor="cover" className="cover-picture">
          <img src={user.CoverPhoto} alt="" />
        </label>
        <input
          type="file"
          name="cover"
          id="cover"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <div className="profile-info">
        <label htmlFor="profile" className="profile-picture">
          <img src={user.ProfileImage} alt="" />
        </label>
        <input
          type="file"
          name="profile"
          id="profile"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <div className="user-name">
          <h3>{user.name}</h3>
          <h5>{user.email}</h5>
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
        <div className="bio">
          {isEditingBio ? (
            <textarea
              value={bio}
              onChange={handleBioChange}
              className="bioText"
            />
          ) : (
            <p>{user.bio}</p>
          )}
          <button onClick={toggleBioEditing}>
            <FontAwesomeIcon icon={faEdit} className="edit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

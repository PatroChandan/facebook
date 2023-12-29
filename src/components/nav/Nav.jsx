import React, { useState } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faRightFromBracket,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CurrentUser from "../../FackApis/CurrentUserData";
import DarkMood from "../darkmod/DarkMood";
import { logout } from "../../Features/auth/authenticationSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSearchPost } from "../../Features/auth/searchSlice";
import { Avatar } from "@mui/material";

const Nav = () => {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState({});
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
  };

  const getSearchResult = async () => {
    try {
      let response = await axios.get(
        `https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"${searchText}"}`,
        {
          headers: {
            projectID: "f104bi07c410",
          },
        }
      );
      // const res = await response.json();

      setPosts(response);
      console.log("post", posts);
      dispatch(setSearchPost(response));
      navigate("/search", { state: { searchpost: "chandan" } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDropMenu = () => {
    setOpenDropMenu(!openDropMenu);
  };

  const user = JSON.parse(localStorage.getItem("facebook-user"));
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"}>
            {/* <h3 className="logo">facebook</h3> */}
            <img
              src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="search"
              placeholder="Search Here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getSearchResult();
                }
              }}
            />
          </div>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to={"/profile/id"}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <div className="nav-right">
          <Link to={"/chatbox"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to={"/comming"}>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          {/* <DarkMood /> */}
          <Link to={"/"}>
            <FontAwesomeIcon icon={faBars} style={{ display: "none" }} />
          </Link>
          {/* <div className="logout" onClick={logOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div> */}
          <div className="user" onClick={handleDropMenu}>
            <img src={localStorage.getItem("profileImage")} alt="" />
            {/* <Avatar sx={{ width: "33px", height: "33px" }} /> */}
            {openDropMenu && (
              <div className="drop-down">
                <Link to={"/profile/id"}>
                  <div className="user">
                    <img src={localStorage.getItem("profileImage")} alt="" />
                    <h4>{user.name}</h4>
                  </div>
                </Link>
                <div className="hr"></div>
                <div className="drop-list">
                  <DarkMood />
                </div>
                <div className="hr"></div>
                <div className="drop-list">
                  <div className="logout" onClick={logOut}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <h4>Sign Out</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

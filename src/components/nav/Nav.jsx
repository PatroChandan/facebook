import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
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

const Nav = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to={"/"}>
            <h3 className="logo">facebook</h3>
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" placeholder="Search Here..." />
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
          <Link to={"/"}>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMood />
          <Link to={"/"}>
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="logout" onClick={logOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
          <div className="user">
            <img src={CurrentUser.map((user) => user.ProfieImage)} alt="" />
            <h4>Beg Joker</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

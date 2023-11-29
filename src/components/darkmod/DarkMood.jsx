import React from "react";
import "./darkMood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faLightbulb,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DarkMood = () => {
  const Darkhandle = () => {
    document.querySelector("body").classList.toggle("darkmood");
  };
  return (
    <div className="dark-mood-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={Darkhandle} />
    </div>
  );
};

export default DarkMood;

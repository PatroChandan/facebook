import React from "react";
import "./darkMood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const DarkMood = () => {
  const Darkhandle = () => {
    document.querySelector("body").classList.toggle("darkmood");
  };
  return (
    <div className="dark-mood-icon" onClick={Darkhandle}>
      <FontAwesomeIcon icon={faLightbulb} />
      <h4>Theme Mood</h4>
    </div>
  );
};

export default DarkMood;

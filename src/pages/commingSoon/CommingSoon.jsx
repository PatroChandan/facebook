import React from "react";
import comingSoon from "../../assets/comming_soon.png";

const CommingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={comingSoon} alt="" style={{ width: "400px" }} />
    </div>
  );
};

export default CommingSoon;

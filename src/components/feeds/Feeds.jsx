import React from "react";
import "./feeds.css";
import Feed from "./Feed";
import HomeFeedData from "../../FackApis/HomeFeedData";

const Feeds = () => {
  return (
    <div className="feeds">
      {HomeFeedData.map((fed) => (
        <Feed fed={fed} key={fed.key} />
      ))}
    </div>
  );
};

export default Feeds;

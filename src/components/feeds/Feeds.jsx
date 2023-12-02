import React, { useEffect, useState } from "react";
import "./feeds.css";
import Feed from "./Feed";
import HomeFeedData from "../../FackApis/HomeFeedData";
import axios from "axios";

const Feeds = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/facebook/post",
          {
            headers: {
              projectID: "f104bi07c490",
            },
          }
        );

        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="feeds">
      {posts?.data?.map((fed) => (
        <Feed fed={fed} key={fed._id} />
      ))}
    </div>
  );
};

export default Feeds;

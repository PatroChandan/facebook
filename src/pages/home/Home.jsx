import React from "react";
import Stories from "../../components/stories/Stories";
import AddPost from "../../components/addPost/AddPost";
import Feeds from "../../components/feeds/Feeds";

const Home = () => {
  return (
    <>
      <Stories />
      <AddPost />
      <Feeds />
    </>
  );
};

export default Home;

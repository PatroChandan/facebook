import React from "react";
import Stories from "../../components/stories/Stories";
import AddPost from "../../components/addPost/AddPost";
import Feeds from "../../components/feeds/Feeds";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Stories />
      <AddPost />
      <Feeds />
    </>
  );
};

export default Home;

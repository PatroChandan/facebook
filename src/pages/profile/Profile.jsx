import React from "react";
import AddPost from "../../components/addPost/AddPost";
import UserProfile from "../../components/userProfile/UserProfile";
import Feeds from "../../components/feeds/Feeds";

const Profile = () => {
  return (
    <>
      <UserProfile />
      <AddPost />
      <Feeds />
    </>
  );
};

export default Profile;

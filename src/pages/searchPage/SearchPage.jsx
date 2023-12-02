import React from "react";
import Stories from "../../components/stories/Stories";
import Feed from "../../components/feeds/Feed";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const searchPost = useSelector((state) => state.search.searchPost.data.data);
  console.log("location", searchPost);
  return (
    <>
      <Stories />
      <div className="feeds">
        {searchPost?.map((fed) => (
          <Feed fed={fed} key={fed._id} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;

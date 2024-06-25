import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="w-[50] border border-gray-300">
      <CreatePost />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Feed;

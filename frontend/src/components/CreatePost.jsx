import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div className="flex    items-center  ">
        <div className="cursor-pointer px-20 hover:bg-gray-300 rounded-full ">
          <h1 className="font-semibold text-gray-600 text-lg ">Foryou</h1>
        </div>
        <div className="cursor-pointer px-20 hover:bg-gray-300 rounded-full">
          <h1 className="font-semibold text-gray-600 text-lg ">Following </h1>
        </div>
      </div>
      <div>
        <div className="flex  m-4">
          <div>
            <Avatar
              className="rounded-full"
              facebookId="100008343750912"
              size="40"
            />
          </div>
          <input
            type="text"
            className="ml-3 w-full border-none outline-none text-lg "
            placeholder="What is happening?"
          />
        </div>
      </div>
      <div className="flex justify-between py-5 border-b border-gray-300 items-center">
        <div>
          <CiImageOn size="30" />
        </div>
        <button className="px-4 text-white text-lg  py-2 border-none rounded-full bg-[#1D9BF0]">
          Post{" "}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

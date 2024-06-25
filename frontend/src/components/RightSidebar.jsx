import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <>
      <div className="w-[25%]">
        <div className="  flex items-center p-2 bg-gray-100 rounded-full outline-none">
          <CiSearch />
          <input
            type="text"
            className="bg-transparent outline-none px-2"
            placeholder="Search"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-2xl my-4">
          <h1 className="font-bold m-1 my-2">Who to follow</h1>
          <div className="flex items-center justify-between">
            <div className="flex">
              <div>
                <Avatar
                  className="rounded-full"
                  facebookId="100008343750912"
                  size="40"
                />
              </div>

              <div className="ml-2">
                <h1 className="font-semibold">vaghela</h1>
                <p className="text-sm">@vaghelasohil</p>
              </div>
            </div>
            <div>
              <button className="px-4 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;

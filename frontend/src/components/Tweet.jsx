import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export default function Tweet() {
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="flex p-4 ">
          <Avatar
            className="rounded-full"
            facebookId="100008343750912"
            size="40"
          />
          <div className="ml-2 w-full">
            <div className="flex items-center ">
              <h1 className="font-bold"> vaghela</h1>
              <p className="text-gray-500 text-sm ml-2">@sohilvaghela</p>
            </div>
            <div>
              <p>Hello developers let's connect and grow together</p>
            </div>
            <div className="flex justify-between my-3 ">
              <div className="flex items-center cursor-pointer">
                <CiHeart size="21" />
                <p>0</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <FaRegComment size="21" />
                <p>0</p>
              </div>
              <div className="flex items-center cursor-pointer">
                <CiBookmark size="21" />
                <p>0 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

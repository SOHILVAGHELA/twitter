import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
function Profile() {
  return (
    <div className="w-[50] border-r border-l border-gray-200 p-2">
      <div>
        <div className="  flex items-center  py-2">
          <Link
            to="/"
            className=" rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size="24" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">vaghela</h1>
            <p className="text-gray-500">10 Post</p>
          </div>
        </div>
        <img src="images/landscap.png" alt="Banner" />
        <div className="absolute top-44 ml-2">
          <Avatar
            className="rounded-full"
            facebookId="100008343750912"
            size="70"
          />
        </div>
        <div className="text-right m-2">
          <button className="px-4 py-1 hover:bg-gray-100 rounded-full border border-gray-400">
            Edit Profile
          </button>
        </div>
        <div>
          <h1 className="font-bold text-lg">vaghela</h1>
          <p className="text-gray-500">@vaghelasohil</p>
        </div>
        <div className="my-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-[20%]">
      <div>
        <img
          className="ml-4"
          src="/images/logo.png"
          width={"45px"}
          alt="twitter-logo"
        />
      </div>
      <div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <IoMdHome size="21px" />
          </div>
          <Link to="/" className="font-semibold text-lg ml-2">
            home
          </Link>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <GoHash dHome size="21px" />
          </div>
          <h1 className="font-semibold text-lg ml-2">Explore</h1>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <IoMdNotifications size="21px" />
          </div>
          <h1 className="font-semibold text-lg ml-2">Notification</h1>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <FaUser size="21px" />
          </div>
          <Link to="/profile" className="font-semibold text-lg ml-2">
            Profile
          </Link>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <FaRegBookmark size="21px" />
          </div>
          <h1 className="font-semibold text-lg ml-2">Bookmarks</h1>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
          <div>
            <MdLogout size="21px" />
          </div>
          <h1 className="font-semibold text-lg ml-2">Logout</h1>
        </div>

        <button className="px-4 py-2 border-none text-md  w-full rounded-full text-white bg-[#1D9BF0]">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;

// import User from "../models/userSchema.js";
import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//register controller
export const Register = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    // Validate request body
    if (!name || !email || !password || !username) {
      return res
        .status(401)
        .send({ message: "All fields are required", success: false });
    }
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .send({ message: "Email already exists", success: false });
    }
    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 16);
    // Create the user
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    // Send success response
    return res.status(200).send({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while registering",
    });
  }
};

//login controller
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorect email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.name}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
//logout controller
export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "user logged out successfully.",
    success: true,
  });
};
//bookmark controller
export const Bookmarks = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);
    if (user.bookmarks.includes(tweetId)) {
      //remove
      await User.findByIdAndUpdate(
        loggedInUserId,
        {
          $pull: { bookmarks: tweetId },
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "tweet removed from bookmark",
      });
    } else {
      //bookmark
      await User.findByIdAndUpdate(
        loggedInUserId,
        {
          $push: { bookmarks: tweetId },
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "tweet added to bookmark",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while Bookmarking",
    });
  }
};
export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password");
    res
      .status(200)
      .send({ success: true, message: "successfully get profile ", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while geting profile",
    });
  }
};
export const getOtherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );
    if (!otherUsers) {
      return res
        .status(401)
        .send({ message: "Currently do not  have any users" });
    } else {
      return res.status(200).send({
        success: true,
        message: "users got successfully",
        otherUsers,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "error while fetching all user" });
  }
};
export const Follow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInuser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);
    if (!user.followers.includes(loggedInUserId)) {
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInuser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(401).send({
        message: `user already follow to ${user.name} `,
      });
    }
    return res.status(200).send({
      message: `${loggedInuser.name} just follow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "errro while following" });
  }
};
export const Unfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;
    const loggedInuser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);
    if (loggedInuser.following.includes(userId)) {
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInuser.updateOne({ $pull: { following: userId } });
    } else {
      return res.status(401).send({
        message: `Use has not follow yet  `,
      });
    }
    return res.status(200).send({
      message: `${loggedInuser.name} just Unfollow to ${user.name}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while unfollowing",
    });
  }
};

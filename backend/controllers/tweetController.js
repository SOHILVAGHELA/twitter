import { User } from "../models/userSchema.js";
import { Tweet } from "../models/tweeSchema.js";
//create tweet controller
export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return (
        res.status(401), send({ success: false, message: "Field are required" })
      );
    }
    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(200).json({
      massage: "Tweet created successfully",
      success: true,
    });
  } catch (error) {}
};
//delete tweet controller
export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Tweet deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting tweet",
    });
  }
};
//like or dislike controller
export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    // Fetch the tweet by ID
    const tweet = await Tweet.findById(tweetId);

    // Check if the tweet exists
    if (!tweet) {
      return res.status(404).send({
        success: false,
        message: "Tweet not found",
      });
    }

    // Ensure the likes property is an array
    if (!Array.isArray(tweet.like)) {
      tweet.like = [];
    }

    // Check if the user has already liked the tweet
    if (tweet.like.includes(loggedInUserId)) {
      // Dislike the tweet
      await Tweet.findByIdAndUpdate(
        tweetId,
        { $pull: { like: loggedInUserId } },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "User disliked your tweet",
      });
    } else {
      // Like the tweet
      await Tweet.findByIdAndUpdate(
        tweetId,
        { $push: { like: loggedInUserId } },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "User liked your tweet",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while liking or disliking the tweet",
    });
  }
};
//all tweet controller
export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.status(200).send({
      tweets: loggedInUserTweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
};
//get following tweets
export const getFollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedInUser = await User.findById(id);
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((otherUsersId) => {
        return Tweet.find({ userId: otherUsersId });
      })
    );
    return res.status(200).send({
      tweets: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while geting following tweets",
    });
  }
};

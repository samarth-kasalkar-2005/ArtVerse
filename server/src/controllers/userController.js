const User = require("../models/User");


// FOLLOW USER
const followUser = async (req, res) => {

  try {

    const {
      currentUserId,
      targetUserId,
    } = req.body;

    // FIND USERS
    const currentUser =
      await User.findById(currentUserId);

    const targetUser =
      await User.findById(targetUserId);

    if (
      !currentUser ||
      !targetUser
    ) {

      return res.status(404).json({
        message: "User not found",
      });
    }

    // AVOID DUPLICATE FOLLOW
    if (
      targetUser.followers.includes(
        currentUserId
      )
    ) {

      return res.status(400).json({
        message:
          "Already following",
      });
    }

    // ADD FOLLOW
    targetUser.followers.push(
      currentUserId
    );

    currentUser.following.push(
      targetUserId
    );

    await targetUser.save();

    await currentUser.save();

    res.status(200).json({
      message:
        "User followed successfully 👥",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  followUser,
};
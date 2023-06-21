const express = require("express");
const {
  TweetController,
  UserController,
  LikeController,
} = require("../controller");
const router = express.Router();

router.post("/tweet", TweetController.createTweet);
router.get("/tweet/:id", TweetController.getTweet);
router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.post("/likes/toggle", LikeController.toggleLike);

module.exports = router;

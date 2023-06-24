const express = require("express");
const {
  TweetController,
  UserController,
  LikeController,
} = require("../controller");
const { Authenticate } = require("../middlewares");
const router = express.Router();

router.post("/tweet", Authenticate.authenticate, TweetController.createTweet);
router.get("/tweet/:id", Authenticate.authenticate, TweetController.getTweet);
router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.post(
  "/likes/toggle",
  Authenticate.authenticate,
  LikeController.toggleLike
);

module.exports = router;

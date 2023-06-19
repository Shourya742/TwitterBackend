const express = require("express");
const { TweetController } = require("../controller");
const router = express.Router();

router.post("/tweet", TweetController.createTweet);

module.exports = router;

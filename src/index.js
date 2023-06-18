const express = require("express");
const mongoose = require("mongoose");
const { ServerConfig, DbConnect } = require("./config");
const { TweetModel, HashtagModel } = require("./models");
const { TweetRepository } = require("./repository");
const app = express();

app.listen(ServerConfig.PORT, async () => {
  console.log("Server started at " + ServerConfig.PORT);
  await DbConnect();
  // TweetModel.create({
  //   content: "This is second Tweet",
  //   likes: 234,
  //   noOfRetweets: 1,
  // });
  // HashtagModel.create({
  //   text: "travel",
  //   tweets: ["648e7290af56d0b1d35c5add"],
  // });
  const tweetRepository = new TweetRepository();
});

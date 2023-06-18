const express = require("express");
const mongoose = require("mongoose");
const { ServerConfig, DbConnect } = require("./config");
const { TweetModel } = require("./models");
const app = express();

app.listen(ServerConfig.PORT, async () => {
  console.log("Server started at " + ServerConfig.PORT);
  await DbConnect.DbConnect();
  TweetModel.Tweet.create({
    content: "First Tweet Content",
    likes: 100,
    noOfRetweets: 25,
  });
});

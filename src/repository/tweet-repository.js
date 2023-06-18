const { TweetModel } = require("../models");

class tweetRepository {
  async get(data) {
    try {
      const tweet = await TweetModel.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllTweets() {
    try {
      const tweets = await TweetModel.find();
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const tweet = await TweetModel.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = tweetRepository;

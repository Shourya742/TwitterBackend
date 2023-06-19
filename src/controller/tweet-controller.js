const { TweetService } = require("../services");

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const data = req.body;
    const response = await tweetService.create(data);
    return res.status(201).json({
      success: true,
      message: "Successfully created a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered",
      data: {},
      err: error,
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const data = req.params.id;
    const response = await tweetService.getTweet(data);
    return res.status(201).json({
      success: true,
      message: "Successfully fetched a tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered",
      data: {},
      err: error,
    });
  }
};

module.exports = { createTweet, getTweet };

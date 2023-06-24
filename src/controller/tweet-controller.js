const { TweetService } = require("../services");
const { FileUploadS3 } = require("../middlewares");

const tweetService = new TweetService();
const singleUploader = FileUploadS3.single("image");

const createTweet = async (req, res) => {
  try {
    singleUploader(req, res, async function (err, data) {
      if (err) {
        res.status(500).json({
          error: err,
        });
      }
      console.log(req.file);
      const payload = { ...req.body };
      payload.image = req.file.location;
      const response = await tweetService.create(payload);
      return res.status(201).json({
        success: true,
        message: "Successfully created a tweet",
        data: response,
        err: {},
      });
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

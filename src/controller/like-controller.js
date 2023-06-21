const { LikeService } = require("../services");

const likeService = new LikeService();
const toggleLike = async (req, res) => {
  try {
    const response = await likeService.ToggleLike(req.body);
    return res.status(201).json({
      status: "Success",
      message: "Content like has been toggled",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Something went wrong while liking the content",
      data: {},
      error: error,
    });
  }
};

module.exports = {
  toggleLike,
};

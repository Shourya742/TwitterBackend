const { LikeRepository, TweetRepository } = require("../repository");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async ToggleLike({ modelId, modelType, userId }) {
    let likeable;

    if (modelType === "Tweet") {
      likeable = await this.tweetRepository.findById(modelId);
    } else if (modelType === "Comment") {
    } else {
      console.log("wrong modeltype");
    }
    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    console.log(exists);
    let isAdded;
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.remove();
      isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      isAdded = true;
    }
    return isAdded;
  }
}

module.exports = LikeService;

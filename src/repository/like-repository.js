const CrudRepository = require("./crud-repository");
const { LikeModel } = require("../models");
class LikeRepository extends CrudRepository {
  constructor() {
    super(LikeModel);
  }
  async findByUserAndLikeable(data) {
    try {
      const like = await LikeModel.findOne(data);
      return like;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LikeRepository;

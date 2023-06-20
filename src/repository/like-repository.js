const CrudRepository = require("./crud-repository");
const { LikeModel } = require("../models");
class LikeRepository extends CrudRepository {
  constructor() {
    super(LikeModel);
  }
}

module.exports = LikeRepository;

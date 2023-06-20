const CrudRepository = require("./crud-repository");
const { CommentModel } = require("../models");
class CommentRepository extends CrudRepository {
  constructor() {
    super(CommentModel);
  }
}

module.exports = CommentModel;

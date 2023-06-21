const { UserModel } = require("../models");
const CrudRepository = require("./crud-repository");
class UserRepository extends CrudRepository {
  constructor() {
    super(UserModel);
  }
}

module.exports = UserRepository;

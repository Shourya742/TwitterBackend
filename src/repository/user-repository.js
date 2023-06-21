const { UserModel } = require("../models");
const CrudRepository = require("./crud-repository");
class UserRepository extends CrudRepository {
  constructor() {
    super(UserModel);
  }

  async findBy(data) {
    try {
      const response = await UserModel.findOne({ email: data });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = UserRepository;

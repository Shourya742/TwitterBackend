const { HashtagModel } = require("../models");
const CrudRepository = require("./crud-repository");

class HashtagRepository extends CrudRepository {
  constructor() {
    super(HashtagModel);
  }

  async bulkCreate(data) {
    try {
      const tags = await HashtagModel.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getHashtagByName(text) {
    try {
      //   let hashtag = await HashtagModel.find({}, { $set: { name: data } });
      let hashtag = await HashtagModel.find({
        text: text,
      });
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtag(id) {
    try {
      let hashtag = await HashtagModel.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteHashtag(data) {
    try {
      let hashtag = await HashtagModel.deleteOne(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = HashtagRepository;

const { TweetRepository, HashtagRepository } = require("../repository");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());
    const tweet = await this.tweetRepository.create(data);
    const alreadyPresentTags = await this.hashtagRepository.getHashtagByName(
      tags
    );

    const textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });
    // storing the tweet
    //storing the hashtags
    return tweet;
  }

  async getTweet(tweetId) {
    const tweet = await this.tweetRepository.findById(tweetId);
    return tweet;
  }
}

module.exports = TweetService;

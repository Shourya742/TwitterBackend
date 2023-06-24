const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ServerConfig } = require("../config");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  name: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  // console.log(typeof ServerConfig.SALT_ITERATIONS);
  const salt = bcrypt.genSaltSync(+ServerConfig.SALT_ITERATIONS);
  const encryptedPassword = bcrypt.hashSync(user.password, salt);
  user.password = encryptedPassword;
  next();
});

userSchema.methods.comparePassword = function compare(password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    "twitter_secret",
    {
      expiresIn: "2h",
    }
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;

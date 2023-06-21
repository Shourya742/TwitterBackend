require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  SALT_ITERATIONS: process.env.SALT_ITERATIONS,
};

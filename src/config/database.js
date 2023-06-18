const mongoose = require("mongoose");
const { MONGO_URI } = require("./server-config");
const connect = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("Successfully connected to Database");
};

module.exports = { DbConnect: connect };

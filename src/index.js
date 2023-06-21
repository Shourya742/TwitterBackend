const express = require("express");
const { ServerConfig, DbConnect } = require("./config");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.listen(ServerConfig.PORT, async () => {
  console.log("Server started at " + ServerConfig.PORT);
  await DbConnect();
});

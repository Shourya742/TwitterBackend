const express = require("express");
const { ServerConfig, DbConnect } = require("./config");
const router = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(ServerConfig.PORT, async () => {
  console.log("Server started at " + ServerConfig.PORT);
  await DbConnect();
});

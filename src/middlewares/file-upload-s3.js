const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { ServerConfig } = require("../config");
aws.config.update({
  region: ServerConfig.REGION,
  secretAccessKey: ServerConfig.SECRET_ACCESS_KEY,
  accessKeyId: ServerConfig.ACCESS_KEY_ID,
});
const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "twitterbucketjdjd",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldNmae: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;

const { UserService } = require("../services");

const userService = new UserService();

const signUp = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signUp(data);
    return res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered in creating a user ",
      data: {},
      error: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signIn(data);
    return res.status(201).json({
      success: true,
      message: "Successfully signed a user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Encountered in signing in the user ",
      data: {},
      error: error,
    });
  }
};
module.exports = {
  signUp,
  signIn,
};

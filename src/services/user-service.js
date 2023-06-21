const { UserRepository } = require("../repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(data) {
    try {
      const email = data.email;
      const currentPassword = data.password;

      const user = await this.userRepository.findBy(email);
      if (!user) {
        throw { message: "No user Found" };
      }
      if (!user.comparePassword(currentPassword)) {
        throw {
          message: "Incorrect password",
        };
      }
      console.log("User successfully signed in");
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

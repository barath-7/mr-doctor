const {
  createUserService,
  userLoginService,
} = require("../service/userService");

const createUser = async (req, res) => {
  try {
    let { body = {} } = req;
    let response = await createUserService(body);
    let { data = {} } = response;
    let { token = "" } = data;

    if (response.status == "success") {
      return res.cookie("MRDR", token).status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.log(`Error while creating user: ${error}`);
    return res.status(400).json({
      status: "failure",
      message: "Error while creating user",
    });
  }
};

const userLogin = async (req, res) => {
  try {
    let { body = {} } = req;
    let response = await userLoginService(body);
    let { data = {} } = response;
    let { token = "" } = data;

    if (response.status == "success") {
      return res.cookie("MRDR", token).status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    console.log(`Error while user login: ${error}`);
    return res.status(400).json({
      status: "failure",
      message: "Error while user login",
    });
  }
};

module.exports = {
  createUser,
  userLogin,
};

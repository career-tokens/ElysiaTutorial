const userService = require("../services/UserService");

module.exports.getAllUsers = async ({ set }) => {
  try {
    const users = await userService.getAllUsers();
    return ({ data: users, status: "success" });
  } catch (err) {
    set.status(500);
    return ({ error: err.message });
  }
};

module.exports.createUser = async ({ body, set }) => {
  try {
    const user = await userService.createUser(body);
    return ({ data: user, status: "success" });
  } catch (err) {
    set.status(500);
    return ({ error: err.message });
  }
};

module.exports.getUserById = async ({ params, set }) => {
  try {
    const user = await userService.getUserById(params.id);
    return ({ data: user, status: "success" });
  } catch (err) {
    set.status(500);
    return ({ error: err.message });
  }
};

module.exports.updateUser = async ({ body, params, set }) => {
  try {
    const user = await userService.updateUser(params.id, body);
    return ({ data: user, status: "success" });
  } catch (err) {
    set.status(500);
    return ({ error: err.message });
  }
};

module.exports.deleteUser = async ({ params, set }) => {
  try {
    const user = await userService.deleteUser(params.id);
    return ({ data: user, status: "success" });
  } catch (err) {
    set.status(500);
    return ({ error: err.message });
  }
};

const { Elysia } = require("elysia");
const userController = require("../controllers/UserController");

module.exports.app = new Elysia()
  .get("/", userController.getAllUsers)
  .post("/", userController.createUser)
  .get("/:id", userController.getUserById)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser)
  .listen(3001);

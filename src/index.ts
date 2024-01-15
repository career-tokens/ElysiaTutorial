const { Elysia } = require('elysia');
const mongoose = require("mongoose");
const userController = require("./controllers/UserController");
const { cors } = require('@elysiajs/cors');

new Elysia()
   .use(cors({
   origin: "http://localhost:3000"
   }))
  .get("/",()=>"working!")
  .get("/users", userController.getAllUsers)
  .post("/adduser", userController.createUser)
  .get("/getuser/:id", userController.getUserById)
  .put("/updateuser/:id", userController.updateUser)
  .delete("deleteuser/:id", userController.deleteUser)
  .listen(3001);
  



// configure mongoose
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);



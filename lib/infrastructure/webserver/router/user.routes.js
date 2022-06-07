const express = require("express");
const userRoutes = express.Router();
const {
  getInfoUser,
  createInfoUser,
  updateInfoUser,
 
} = require("../../../interfaces/controllers/ServicesControllers");

userRoutes.get("/users", getInfoUser);
userRoutes.post("/users", createInfoUser);
userRoutes.put("/users", updateInfoUser);


module.exports = { userRoutes };

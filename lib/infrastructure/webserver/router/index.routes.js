const express = require("express");
const router = express.Router();
const { userRoutes } = require("./user.routes");

router.use("/store/user", userRoutes);

module.exports = { router };

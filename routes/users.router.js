const { Router } = require("express");
const { login } = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/login", login);

usersRouter.get("/register", login);

module.exports = usersRouter;
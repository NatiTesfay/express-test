const usersRouter = require("express").Router()
const {createUser,createPassword} = require("../controllers/user-ctrl")

usersRouter.post("/postUser", createUser)
usersRouter.post("password/",createPassword)
module.exports = usersRouter;
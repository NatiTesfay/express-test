const {users} = require("../models/user-models")
const {emailValidation,passwordValidation} = require("../validation/userValid")


const createUser = (req,res) => {
    console.log(req.body.user);
    if (emailValidation(req.body.user.email)) {
        users.push(req.body.user)
       return res.send("success")
    }
     return res.send("email not found") 
}

const createPassword = (req,res)=>{
    if (!passwordValidation(req.body.user) == "") {
        users.push(req.body.user)        
        return res.send("success")
    }
    return res.send("passwords are match")
}

module.exports = {
    createUser,
    createPassword
}
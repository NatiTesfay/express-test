const emailValidation = (email) => {
    const temp = email.indexOf("@")
    const last = email.slice(email.length- 4)
    if (temp > 0 && last == ".com")  return true;
    return false
}

const passwordValidation =(password)=>{
    const confirmEmail = password.find(item=>item.password = req.body.password)
    if (confirmEmail === req.body.password) return true;
    return false
}






module.exports = {
    emailValidation,
    passwordValidation
}
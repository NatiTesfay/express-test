const validator = require("validator");
const isEmpty = require("is-empty");

const validateRegister = (user)=>{  
   let errors = {}
    user.name = isEmpty(user.name)? "" : user.name;
    user.lastName = isEmpty(user.lastName)? "" : user.lastName;
    user.email = ! isEmpty(user.email)? user.email: "";
    user.password = isEmpty(user.password)? "":user.password
    user.password2 = isEmpty(user.password2)? "":user.password2
    user.id = isEmpty(user.id)? "" : user.id
   
    
   if( validator.isEmpty(user.name))errors.name = "name required";
   if (validator.isEmpty(user.lastName))errors.lastName = "last name required" 
   if ( ! validator.equals(user.password,user.password2))errors.password2="password ar not match";
   if ( validator.isEmpty(user.email))errors.email="email is required";
   if ( ! validator.isEmpty(user.email))errors.email="email is wrong";
   if (validator.isEmpty(user.id))errors.id = "id is match"
   if ( ! validator.isEmpty(user.id))errors.id ="id are not matching"
   return{
    errors,
    isValid:isEmpty(errors)
   }
}

module.exports=validateRegister;
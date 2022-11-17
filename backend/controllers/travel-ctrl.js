const countries = require("../models/travel-models")


const getCountry = (req,res) =>{
    res.send( countries)
}

const upDataCountryById =(req,res)=>{
    findUserIndex(req,res)
    req.send(countries[req.params.id])
}

const deleteCountry = (req,res)=>{
    const deleteIndex = findUserIndex(req);
    const userIndex = countries.splice(deleteIndex,1)
    userIndex ? res.send(country) : res.send("error")
}

const getCountryById = (req,res)=>{
    res.send(countries[req.params.id]);
}



 
// const deleteCountry = (req, res) => {
//         const startIndex = findUserIndex(req);
//         const as = users.splice(startIndex, 1)
//         as ? res.send(students) : res.send("error")
//     }

//     const addCountry = (req,res)=>{
//            const userIndex = findUserIndex(req);
//            if (userIndex > -1) {
//             students[userIndex] = req.body.user;
//             return res.send(students)
//            }
//            res.send("user not found");
        

    function findUserIndex(req) {
        const userItem = countries.find(user => user.id == req.params.id);
        const startIndex = countries.indexOf(userItem);
        return startIndex;
    }



module.exports = {
    getCountry,
    upDataCountryById,
    deleteCountry,
    getCountryById,
}

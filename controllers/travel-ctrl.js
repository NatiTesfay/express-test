const countries = require("../models/travel-models")


const getCountry = (req,res) =>{
    res.send(countries)
}

// const getCountryById = (req,res)=>{
//     findIndex(req, res);
//   }

// const postCountry = (req,res) =>{
//     findUserIndex(req,res)
// }

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
//         }

//     function findUserIndex(req) {
//         const userItem = students.find(user => user.id == req.params.id);
//         const startIndex = students.indexOf(userItem);
//         return startIndex;
//     }



module.exports = {
    getCountry,
    // getCountryById,
    // postCountry,
    // deleteCountry,
    // addCountry,
}

const {} = require("../models/travel-models");

const getTravel = (req,res)=>{
    res.send("get")
}


const getTravelById = (req,res) =>{
    findUserIndex(req,res)
}

const postTravel = (req,res)=>{
    travel.push(req.body.newStudent)
    res.send("good work")
}

const addTravel = (req,res)=>{
       const userIndex = findUserIndex(req);
       if (userIndex > -1) {
        travels[userIndex] = req.body.user;
        return res.send(travel)
       }
       res.send("user not found");
    }

const deleteTravel = (req, res) => {
    const startIndex = findUserIndex(req);
    const as = users.splice(startIndex, 1)
    as ? res.send(travels) : res.send("error")
}


function findUserIndex(req) {
    const userItem = students.find(user => user.id == req.params.id);
    const startIndex = students.indexOf(userItem);
    return startIndex;
}

module.exports = {
    getTravel,
    getTravelById,
    postTravel,
    addTravel,
    deleteTravel,
    findUserIndex
}

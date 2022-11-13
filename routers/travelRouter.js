const routerTravel = require("express").Router()

const  {
    getTravel,
    getTravelById,
    postTravel,
    addTravel,
    deleteTravel,
} = require("../controllers/travel-ctrl");

routerTravel.get("/",getTravel)
routerTravel.get("/byId/:id",getTravelById)
routerTravel.get("/saveData/",postTravel)
routerTravel.get("/deleteData/:id",deleteTravel)
routerTravel.get("/upData/:id",addTravel)

module.exports = routerTravel;

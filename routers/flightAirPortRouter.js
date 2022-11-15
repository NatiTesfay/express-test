const routerAirport = require("express").Router()

const{
    getAllAirport,
    postAirport,
    getAirPortsById,

} = require("../controllers/flightAirPort-ctrl")


routerAirport.get("/",getAllAirport);
routerAirport.post("/postAirport",postAirport);
routerAirport.put("/addAirPort/:id",getAirPortsById)

module.exports = routerAirport;

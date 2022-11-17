const routingTravel = require("express").Router()

const  {
    getCountry,
    upDataCountryById,
    deleteCountry,
    getCountryById
} = require("../controllers/travel-ctrl");


routingTravel.get("/",getCountry)
routingTravel.put("/upDataCountry/:id",upDataCountryById)
routingTravel.delete("/deleteCountry/",deleteCountry)
routingTravel.get("/getById/:id",getCountryById)


module.exports = routingTravel;

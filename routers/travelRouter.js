const routerTravel = require("express").Router()

const  {
    getCountry,
    upDataCountryById,
    deleteCountry,
    getCountryById
    
    // addCountry,
} = require("../controllers/travel-ctrl");


routerTravel.get("/",getCountry)
routerTravel.put("/upDataCountry/:id",upDataCountryById)
routerTravel.delete("/deleteCountry/",deleteCountry)
routerTravel.get("/getById/:id",getCountryById)


module.exports = routerTravel;

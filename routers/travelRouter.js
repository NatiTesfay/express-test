const routerTravel = require("express").Router()

const  {
    getCountry,
    // getCountryById,
    // postCountry,
    // deleteCountry,
    // addCountry,
} = require("../controllers/travel-ctrl");


routerTravel.get("/",getCountry)


module.exports = routerTravel;

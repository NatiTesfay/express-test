const routerFlights = require("express").Router();

const {
    getFlights,
    postFlight,
    upDateFlightesById,
    deleteFlightById,
    getCoumpanyById,
    countryName,
    companyName

} = require("../controllers/flights-ctrl")

routerFlights.get("/",getFlights)
routerFlights.post("/postFlights",postFlight)
routerFlights.put("/addFlights",upDateFlightesById)
routerFlights.delete("/deleteFlights",deleteFlightById)
routerFlights.get("/getById/:id",getCoumpanyById)
routerFlights.get("/countryName/:country",countryName)
routerFlights.get("/cpompanyName/:flightName",companyName)

module.exports = routerFlights;


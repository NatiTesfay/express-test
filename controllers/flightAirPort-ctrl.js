const airports = require("../models/flightAirPort-models");

const getAllAirport = (req,res)=>{
    res.send(airports)
    res.send("success")
}

const postAirport = (req,res)=>{
    airports.push(req.body)
    res.send({massage:"country added"})

}

const getAirPortsById = (req,res)=>{
 const flightId = airports.find((airPort) => airPort.id == req.params.id);
 if (flightId > -1) {
    airports[flightId] = req.body.data
 }
  
}

module.exports = {
    getAllAirport,
    postAirport,
    getAirPortsById
}

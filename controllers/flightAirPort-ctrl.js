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
 flightId = airports.find(airPort => airPort.id == req.params.id);
 itemIndex=airports.indexOf(flightId)
    airports[itemIndex] = req.body.data
    res.send({massage:'all good', airports})
  
}

module.exports = {
    getAllAirport,
    postAirport,
    getAirPortsById
}

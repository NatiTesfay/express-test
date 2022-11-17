const airports = require("../models/flightAirPort-models");
const {validateEmail} = require("../validation/userValid")

const getAllAirport = (req,res)=>{
    res.send(airports)
    res.send("success")
}

const postAirport = (req,res)=>{
    if (validateEmail(req.body)) {
        
    }
    airports.push(req.body.user)
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

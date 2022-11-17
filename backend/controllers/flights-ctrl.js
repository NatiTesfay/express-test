const flights = require("../models/flights-models");
const getIndex = (req, res) => {
    const flightId = flights.find((flight) => flight.id == req.params.id);
    const flightIndex = flights.indexOf(flightId);
    return flightIndex;
  };

const getFlights = (rea,res)=>{
    res.send(flights)
    res.send("seccsue")
};

const postFlight = (req,res)=>{
   const data = flights.push(req.body)
    res.send("succes")
    if (data === null) {
        res.send(error)
    }
};

const upDateFlightesById = (req,res)=>{
    const flightIndex = getIndex(req);
    if (flightIndex > -1) {
      flights[flightIndex] = req.body.data;
      return res.send("flight update");
    }
    res.send("err flight has not update");
  };

const deleteFlightById = (req,res)=>{
     const data = getIndex(req);
     const deleteFlights = flights.splice(data,1)
     deleteFlights ? res.send("deleted") : res.send(error)
};

const getCoumpanyById = (req,res)=>{
    const flightId = flights.find((flight) => flight.id == req.params.id);
     res.send(flightId)
}
;
const countryName = (req,res)=>{
  const flightId = flights.find((flight) => flight.country == req.params.country)
  flightId ? res.send(flightId) :res.send(error)
  };

const companyName = (req,res)=>{
  const flightName = flights.find((flight) => flight.flightName == req.params.flightName)
  flightName ? res.send(flightName) :res.send(error)
  };




module.exports ={
    getFlights,
    postFlight,
    upDateFlightesById,
    deleteFlightById,
    getCoumpanyById,
    countryName,
    companyName,
}
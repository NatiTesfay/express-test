const express = require("express");
const app = express();
const cors =require("cors");
const port = 8080;
const routingTravel = require("./routers/travelRouter")
const routerFlights = require("./routers/flightsRouter")
const routerflightAirPort = require("./routers/flightAirPortRouter");
app.use("/travels", routingTravel)
app.use("/flights",routerFlights)
app.use("/flightAirPort",routerflightAirPort)
app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.get("/name", (req, res) => {
    res.send("seccusse")
})


app.listen(port,()=>{
    console.log(`new server ${port}`);
})

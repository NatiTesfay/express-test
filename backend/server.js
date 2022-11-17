const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const cors =require("cors");
const routingTravel = require("./routers/travelRouter");
const routerFlights = require("./routers/flightsRouter");
const routerAirport = require("./routers/flightAirPortRouter");
const routerUser = require("./routers/userRouter")
const app = express();
const port = 8080;
// const myMiddleWare = (req,res,next)=>{
//     console.log("middleWear is activted")
//     next()
//    !req.params ? console.log("empty"): res.send("{error}")

// }
// app.use(myMiddleWare);
// const userMiddleWare = (req,res,next)=>{
//     const user = routerUser.find(item=> item.email == req.body.email)
//     if (!user) res.send("user not found")
//     else if (user.password == req.body.password) res.send("welcome") 
//         next()
//     res.send("password not match") 
// }
    
// const MiddleWare = (req,res,next)=>{
//      if(req.method === "POST"){
//         console.log("routes POST")
//         return next()
//      }
//      res.send("please autothorized")
//   }

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use("/airport",routerAirport)
app.use("/flights",routerFlights)
app.use("/travels", routingTravel)
app.use("/users",routerUser)
app.get("/", (req, res) => {
    res.send({massage:"seccusse"})
})
app.listen(port,()=>{
    console.log(`new server ${port}`);
})
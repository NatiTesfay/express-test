const express = require("express");
const app = express();
const cors =require("cors");
const port = 8080;
const routing = require("./routers/travelRouter")
app.use("/travels", routing)
app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.get("/name", (req, res) => {
    res.send("seccusse")
})


app.listen(port,()=>{
    console.log(`new server ${port}`);
})

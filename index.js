const express = require("express");
const app = express();

const cors =require("cors");
const port = 8000;


app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

let user = ["nati,avi,asi,ami,rami,dalia,shlomo,dani,or,gad"];
let students = [
    {name:"nati",lastName:"tesfay",age:25,id:1},
    {name:"avi",lastName:"dan",age:20,id:2},
    {name:"asi",lastName:"ram",age:24,id:3},
    {name:"rami",lastName:"gad",age:5,id:4}
]

app.get("/name", (req, res) => {
    res.send(user)
    console.log("seccusse");
})

app.post("/newName", (req, res) => {
    user.push(req.body.name)
    res.send("seccusse")
})

app.get("/students",(req,res)=>{
    res.send(students)

})

app.post("/newStudents",(req,res)=>{
    students.push(req.body.newStudent)
    res.send("good work")
})

app.post("/oneStudents:id",(req,res)=>{
  findIndex(req, res);
})

app.post("/addteacher",(req,res)=>{
    fs.appendFile("addTeacher",JSON.stringify(req.body.teacher),(error)=>{
    if (error) res.send(error)  
    res.send("file created")
    })
})

app.get("/addteacher",(req,res)=>{
    fs.readFile("addTeacher",{encoding:"utf-8"},(error,data)=>{
        if (error) res.send("file readed")
        res.send(data) 
    })
})


app.delete('/student/delete/:id', (req, res) => {
    const startIndex = findUserIndex(req);
    const as = users.splice(startIndex, 1)
    as ? res.send(students) : res.send("error")
})



app.listen(port,()=>{
    console.log(`new server ${port}`);
})

function findUserIndex(req) {
    const userItem = students.find(user => user.id == req.params.id);
    const startIndex = students.indexOf(userItem);
    return startIndex;
}
import express from "express";

const app2 = express();

//GET
//POST
//PUT
//DELETE

app2.get("/hello", (req, res, next) =>{
    return res.send("hello!!!");
})

app2.post("/hello", (req, res, next) =>{
    return res.send("hello!!!");
})

app2.listen(5003, () => console.log("Server Open"));
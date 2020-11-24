const express= require("express");
const app= express();
const env= require("./config/env");
const port= env;
console.log("it is working");
console.log(process.env.PORT);
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/hello.html");
});




app.listen(port, () => console.log("server is running"));
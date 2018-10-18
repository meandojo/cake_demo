var express = require("express");
var app =  express();
// var path = require("path")  Needed for our catch all(see below)
const routes = require("./server/routes")


var bodyParser = require("body-parser")
app.use(bodyParser.json());

app.use(express.static( __dirname + './public/dist' ));
// app.all("*", (req,res,next) => {
//     console.log("Hitting all")
//     res.sendFile(path.resolve("./public/dist/index.html"))
// });
//Not needed for our server to run, it redirects other routes to our Angular app home page

routes(app);

app.listen(8000, ()=>console.log("listening on port 8000"));
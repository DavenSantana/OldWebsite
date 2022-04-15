var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//1
//console.log("Hello World");

//2
// app.get("/", function(request, response){
//   response.send("Hello Express");
// })

//3
// app.get("/", function(request,response){
//   response.sendFile(__dirname + "/views/index.html");
// })

//4
//app.use("/public", express.static(__dirname + "/public"));

//5
// app.get("/json", function(request,response){
//   response.json({"message": "Hello json"});
// })

//6
// app.get("/json", function(request,response){
//   if(process.env.MESSAGE_STYLE == "uppercase")
//     response.json({"message": "HELLO JSON"});
//   else
//     response.json({"message": "Hello json"});
  
// })

//7
// app.use(function(req, res, next){
    
//     var string = req.method + " " + req.path + " - " + req.ip;
//     console.log(string);
//     next();
// })

//8
// app.get("/now", function(req, res, next){
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     // accessing the newly added property
//     // in the main function
//     res.json({time: req.time});
//   }
// );

//9
// app.get("/:word/echo", function(request, response){
//   response.json({echo: request.params.word});
//   console.log(request.params.word);
// })

//10
// app.get("/name", function(request, response){
//   let fullName = request.query.first + " " + request.query.last;
//   response.json({name: fullName});
// })

//11
// app.use(bodyParser.urlencoded({extended: false}));

//12
// app.post("/name", bodyParser.urlencoded({extended: false}), function(request, response){
//   let fullName = request.body.first + " " + request.body.last;
//   response.json({name: fullName});
// })

module.exports = app;
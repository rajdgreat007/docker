var express = require("express");

var app = express();

app.get('/', function (req,res) {
    res.send('hellos')
})

app.listen("9003", function(){
    console.log("listening on port 9003");
});
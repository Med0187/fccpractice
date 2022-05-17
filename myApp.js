let express = require('express');
let app = express();

app.use(express.static(__dirname+"/public/style.css"));

app.get("/", function(req,res) {
    res.sendFile(__dirname+"/views/index.html");
});
console.log(__dirname+"/public/style.css");
console.log(__dirname+"/views/index.html");




































 module.exports = app;

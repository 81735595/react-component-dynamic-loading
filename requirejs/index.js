var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var port = 3333

app.use(express.static(__dirname + '/assets'))
app.listen(port, function() {
    console.log("====================");
    console.log("http://localhost:"+port+"/index.html, Ctrl+C to stop");
    console.log("====================");
})

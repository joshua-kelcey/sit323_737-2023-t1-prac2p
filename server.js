// to install express:
//    First build package.json: npm init --yes 
//    Then install express, adding it to package.json: npm install -s express

var express = require('express')
var app = express()

// set up a GET response
app.get('/', function(req,res){
    res.send('Hello World!')
    console.log('There was a connection!')
} )

// set up another GET response
app.get('/sneaky', function(req,res){
    res.send('Hey! Dont Be Sneaky!')
    console.log('There was a sneaky connection!')
} )

// listen on port 3000 (check "localhost:3000"in the browser)
app.listen(3000, () => console.log('App is listening on port 3000'))
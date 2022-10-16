// require module
/*
var connect = require('connect')
 
// create app
var app = connect()

function helloworld(req,res,next)
{
    res.setHeader('Content-Type', 'text-plain');
    res.end('Hello World');
}
function aboutme(req,res,next)
{
    res.setHeader('Content-Type', 'text-plain');
    res.end('Goodbye-World');ex
}
app.use('/aboutme', aboutme);
app.use('/helloworld',helloworld)
app.listen(3000);
console.log('Server is running Local Host')
*/
const express = require('express')
const app = express()
const port = 3000;
const path = require('path');


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
})
app.get('/aboutme', (req, res) => {
    res.send('ABOUT ME!')
  })

app.listen(port);
console.log('Server started at http://localhost:' + port);


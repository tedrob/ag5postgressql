//Install express server
const express = require('express');
const bodyParser = require("body-parser");  // added 
const path = require('path');

const app = express();
app.use(bodyPar)

// Serve only the static files form the dist directory
const distDir = __dirname + '/dist/'
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(distDir));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
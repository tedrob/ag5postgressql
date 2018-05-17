//Install express server
const express = require('express');
const bodyParser = require("body-parser");  // added 
const path = require('path');

const app = express();
// Parsers
app.use(bodyParser.json()) // added 
app.use(bodyParser.urlencoded({ extended: false})); // added

// Serve only the static files form the dist directory
// const distDir = __dirname + '/dist/'  // changed
// app.use(express.static(__dirname + '/dist'));
// app.use(express.static(distDir));  // changed
// to this Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// not sure about this yet 
// API location
// app.use('api', api);

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});

// replace below with above

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
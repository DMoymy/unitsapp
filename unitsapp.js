const express = require('express'),
 bodyParser = require('body-parser'),    
 app = express(),
 port = process.env.PORT || 1335;

var fs = require("fs"),
 path = require("path");

app.use(express.static('public'));
app.use(express.static('files'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + './index.html')));

app.listen(port, () => console.log(`Adalemya Units Converter is running on port ${port}!`));


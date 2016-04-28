var express = require('express');
var path = require('path');
var json = require('../back/jsonFiles/data.json');
var bodyParser = require('body-parser');
var multer  = require('multer')
var api = require('./api');
var app = express();


//------SERVER EXPRESS WITH NODE
//GET
app.get('/api/', function (req, res) {
  res.send(json);
});

//POST data
/*
app.use(bodyParser.json());
app.post('/api/picolo', function(req, res) {
    api.update(req, res);
});
*/

//POST files
var upload = multer( { dest: 'back/csvFiles/' } );
app.post( '/upload', upload.single( 'file' ), function( req, res, next ) {
    if ( !req.file.mimetype.startsWith( 'text/csv' ) ) {
      return res.status( 422 ).json( {
        error : 'The uploaded file must be an image'
      } );
    }else{
      api.upload(req, res);
    }
});


app.use(express.static ( path.resolve(__dirname, '..', 'front'), {"Access-Control-Allow-Origin": "*"} ));


var server = app.listen(9000, function(){
    console.log('Server ready on localhost: 9000');
})

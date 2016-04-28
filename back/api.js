var fs = require("fs");
/*
var data = require('./data');

exports.update = function update(req, res){
        console.log("BUTTON", req.body);

        var up = data
                .chain()
                .find(data.start, data.timer, data.actionsMore, data.actionsLess)
                .assign({
                  start: req.body.start,
                  timer: req.body.timer,
                  actionsMore: req.body.actionsMore,
                  actionsLess: req.body.actionsLess
                })
                .value();

        res.json(up);
        console.log("CHANGE", up);

}
*/


exports.upload = function upload(req, res){
  console.log(req.file);

  var Converter = require("csvtojson").Converter;
  var fs = require("fs");		//modl internet node gestion fichiers
  var csvConverter = new Converter({
    	constructResult:true,
    	delimiter:";",
    	headers: ["colone1", "colone2", "colone3", "colone4", "colone5", "colone6", "colone7", "colone8", "colone9", "colone10"]
  });

  var readStream = fs.createReadStream(req.file.path, {encoding: 'utf8'});

  csvConverter.on("end_parsed", function (jsonObj) {
     fs.writeFile('./back/jsonFiles/data.json', JSON.stringify(jsonObj, null, 4), function(err) {
         if(err) {
             console.error(err);
         } else {
             console.log("JSON saved");
         }
     });
  });

  readStream .pipe(csvConverter);
  res.redirect("back");

}

var express = require('express');
var router = express.Router();
var barcode = require('barcode');

var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	var code39 = barcode('code39', {
		data: "it works",
		width: 400,
		height: 100,
	});
	
	var outfile = path.join(__dirname, 'imgs', 'mycode.png')
code39.saveImage(outfile, function (err) {
    if (err) throw err;
 
    console.log('File has been written!');
});

  res.render('index', { title: 'Express' });
});

module.exports = router;

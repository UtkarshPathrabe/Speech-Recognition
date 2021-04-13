const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('*', function (req, res) {
	res.send('Invalid URL');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('App listening at port ' + port);
});

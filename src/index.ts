import express from 'express';
import path from 'path';

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8081, function () {
	console.log('!Example app listening at http://localhost:8081');
});

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { FormValidator } from '../server/formValidator';

const app = express(),
	env = process.env.NODE_ENV || 'development',
	forceSsl = function (req, res, next) {
		if (req.headers['x-forwarded-proto'] !== 'https') {
			return res.redirect(['https://', req.get('Host'), req.url].join(''));
		}
		return next();
	};

if (env === 'production') {
	app.use(forceSsl);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/test', function (req, res) {
	res.send('Hello test World!');
});

app.post('/submitDevis', function (req, res) {
	const form = req.body.data.form,
		formValidator = new FormValidator(),
		error = formValidator.validate(form);

	console.log(JSON.stringify(error));

	if (Object.keys(error).length > 0) {
		res.send(error);
	} else {
		res.send('OK');
	}
});

app.get('/#/test', function (req, res) {
	res.send('Hello World! 2');
});

app.listen(3003, function () {
	console.log('ControlAir server started');
});

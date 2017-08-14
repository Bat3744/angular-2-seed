import * as express from 'express';
import * as bodyParser from 'body-parser';
import { FormValidator } from '../server/formValidator';
import { MailUtils } from '../server/mailUtils';

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
		captchaResponse = req.body.data.captchaResponse,
		formValidator = new FormValidator(),
		captchaPromise = formValidator.recaptchaValidation(captchaResponse),
		formPromise = formValidator.validate(form),
		mailUtils = new MailUtils();

	Promise.all([captchaPromise, formPromise]).then(errors => {

		const allErrors = Object.assign({}, errors[0], errors[1]);

		if (!formValidator.isEmpty(allErrors)) {
			res.send(allErrors);
		} else {
			mailUtils.sendEmail(form).then(() => {
				res.send({});
			}).catch((err) => {
				res.send(err);
			});
		}

	});

});

app.get('/#/test', function (req, res) {
	res.send('Hello World! 2');
});

app.listen(3003, function () {
	console.log('ControlAir server started');
});

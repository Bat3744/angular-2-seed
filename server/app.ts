import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { FormValidator } from '../server/formValidator';
import { MailUtils } from '../server/mailUtils';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/../index.html'));
});

app.get('/api/test', function (req, res) {
	res.send('Hello test World!');
});

app.post('/api/submitDevis', function (req, res) {

	console.log('request = ' + JSON.stringify(req.body));

	if (!req.body || !req.body.data) {
		handleError(res, "Invalid form data", "Must provide valid data", 400);
	}

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

function handleError(res, reason, message, code) {
	console.log("ERROR : " + reason);
	res.status(code || 500).json({"error": message});
}

const port = process.env.PORT || 3003;

app.listen(port, function () {
	console.log('ControlAir server started on port ' + port);
});

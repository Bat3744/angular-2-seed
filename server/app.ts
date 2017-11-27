import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import { FormValidator } from '../server/formValidator';
// import { MailUtils } from '../server/mailUtils';

const app = express();

app.use(express.static(__dirname));

app.get('/api/test', function (req, res) {
	res.send('Hello test World!');
});

/*app.post('/api/submitDevis', function (req, res) {

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

});*/

const port = process.env.PORT || 3003;

app.listen(port, function () {
	console.log('ControlAir server started on port ' + port);
});

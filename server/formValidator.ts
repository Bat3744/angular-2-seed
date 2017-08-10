import * as request from 'request';

export class FormValidator {

	validate(form: any): Promise<Object> {

		return new Promise((resolve, reject) => {

			const nomError: Object = this.stringValidation(form.nom, 'nom');
			const prenomError: Object = this.stringValidation(form.prenom, 'prenom');
			const emailValidation: Object = this.emailValidation(form.email);
			const telephoneValidation: Object = this.telephoneValidation(form.telephone);

			const errors = Object.assign({}, nomError, prenomError, emailValidation, telephoneValidation);

			if (Object.keys(errors).length > 0) {
				resolve(errors);
			} else {
				resolve();
			}
		});

	}

	recaptchaValidation(response:string): Promise<Object> {

		return new Promise((resolve, reject) => {
			request.post({
				url: 'https://www.google.com/recaptcha/api/siteverify',
				form: {
					secret: '6LfVbiEUAAAAAOinkUGIVn6uXq-N7r4_iDL58-Gz',
					response: response
				}
			}, function (err, httpResponse, body) {
				const info = JSON.parse(body);

				if (!info.success) {
					resolve({'captcha': 'captcha error'});
				} else {
					resolve();
				}
			});
		});

	}

	stringValidation(value: string, field: string): Object {
		if (!value) {
			return {[field]: 'Le ' + field + ' est obligatoire'};
		} else if (!value.match(/^[a-zA-Zàâéèëêïîôùüçœ\'’ -]{1,60}$/)) {
			return {[field]: 'Le ' + field + ' n\'est pas valide'};
		}

		return {};
	}

	emailValidation(value: string): Object {
		if (!value) {
			return {email: 'L\'email est obligatoire'};
		} else if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
			return {email: 'L\'email n\'est pas valide'};
		}

		return {};
	}

	telephoneValidation(value: string): Object {
		if (value && !value.match(/^([0-9+\-. ]?){5,20}$/)) {
			return {telephone: 'Le telephone n\'est pas valide'};
		}

		return {};
	}

}

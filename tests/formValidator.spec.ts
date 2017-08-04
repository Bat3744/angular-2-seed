import {expect} from 'chai';
import {FormValidator} from '../server/formValidator';

describe('FormValidator', () => {

	let form,
		formValidator = new FormValidator();

	beforeEach(() => {
		form = {
			'nom': 'Doeuf',
			'prenom': 'John',
			'email': 'john.doeuf@test.com',
			'telephone': '0102030405',
		}
	});

	describe('nom', () => {

		it('should return error if nom is empty', () => {
			// Given
			form.nom = '';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'nom': 'Le nom est obligatoire'});
		});

		it('should return error if nom contains special char', () => {
			// Given
			form.nom = 'J#*oh%n';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'nom': 'Le nom n\'est pas valide'});
		});

		it('should not return error if nom is valide', () => {
			// Given
			form.nom = 'Joéëlle';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({});
		});

	});

	describe('prenom', () => {

		it('should return error if prenom is empty', () => {
			// Given
			form.prenom = '';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'prenom': 'Le prenom est obligatoire'});
		});

		it('should return error if prenom contains special char', () => {
			// Given
			form.prenom = 'J#*oh%n';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'prenom': 'Le prenom n\'est pas valide'});
		});

		it('should not return error if prenom is valide', () => {
			// Given
			form.prenom = 'Joéëlle';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({});
		});

	});

	describe('email', () => {

		it('should return error if email is empty', () => {
			// Given
			form.email = '';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'email': 'L\'email est obligatoire'});
		});

		it('should return error if email is not valid', () => {
			// Given
			form.email = 'email@pasvalid';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'email': 'L\'email n\'est pas valide'});
		});

		it('should not return error if email is valide', () => {
			// Given
			form.email = 'test.coucou@tata.com';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({});
		});

	});

	describe('telephone', () => {

		it('should return error if telephone is not valid', () => {
			// Given
			form.telephone = '0102*a0304';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({'telephone': 'Le telephone n\'est pas valide'});
		});

		it('should not return error if telephone is valide', () => {
			// Given
			form.telephone = '01 02 03 04 05';

			// When
			const errors = formValidator.validate(form);

			// Then
			expect(errors).to.deep.equal({});
		});

	});

});

export default class FormValidator {

  validate(form:any): Object {

    let errors:any = {};

    if (!form.nom) {
      errors.nom = 'Le nom est obligatoire';
    }

    return errors;
  }

}

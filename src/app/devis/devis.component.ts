import { Component } from '@angular/core';
import { Devis } from './devis';
import { DevisService } from './devis.service';

@Component({
  selector:    'devis',
  templateUrl: 'devis.component.html'
})

export class DevisComponent {

  constructor (private devisService: DevisService) {}

  model = new Devis();

  natures = [
    'Essais de réception - sorbonnes de laboratoire',
    'Essais de routine - sorbonnes de laboratoire',
    'Hottes - Armoires ventilées - Bras aspirants',
    'Audit aéraulique - réseau de ventilation',
    'Formation'
  ];

  captchaResponse = null;
  dataTest = null;

  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSubmit() {
    console.log(this.diagnostic);

    this.devisService.getData().subscribe(
      dataTest => this.dataTest = dataTest.toString()
    );

    this.devisService.submitForm({
      form: this.model,
      captchaResponse: this.captchaResponse
    }).subscribe(
      dataTest => this.dataTest = dataTest.toString()
    );

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

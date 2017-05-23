import { Component } from '@angular/core';
import { Devis } from './devis';

@Component({
  selector:    'devis',
  templateUrl: 'devis.component.html'
})

export class DevisComponent {

  model = new Devis();

  natures = [
    'Essais de réception - sorbonnes de laboratoire',
    'Essais de routine - sorbonnes de laboratoire',
    'Hottes - Armoires ventilées - Bras aspirants',
    'Audit aéraulique - réseau de ventilation',
    'Formation'
  ];

  submitted = false;

  onSubmit() {
    console.log(this.diagnostic);
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

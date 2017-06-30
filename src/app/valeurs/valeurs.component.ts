import { Component, OnInit }  from '@angular/core';
import { Router }                   from '@angular/router';
import { ValeursService }           from './valeurs.service';

@Component({
  //moduleId: module.id,
  selector:    'valeurs',
  templateUrl: 'valeurs.component.html'
})

export class ValeursComponent {

  dataTest: string;

  constructor (private valeursService: ValeursService) {}

  ngOnInit() {
    this.valeursService.getData().subscribe(
      dataTest => this.dataTest = dataTest.toString()
    );
  }

  valeursData = require("./valeursData.json");

}

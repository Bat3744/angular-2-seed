import { Component, OnInit }  from '@angular/core';
import { Router }                   from '@angular/router';
import { ValeursService }           from './valeurs.service';

@Component({
  //moduleId: module.id,
  selector:    'valeurs',
  templateUrl: 'valeurs.component.html'
})

export class ValeursComponent {

  data: string;

  constructor (private valeursService: ValeursService) {}

  srcImg1 = require('../../static/img1-2.png');
  srcImg2 = require('../../static/img2-2.png');

  valeursData = require("./valeursData.json");

  getValeurTest = this.valeursService.getData()
    .subscribe(data => this.data = data.toString());

}

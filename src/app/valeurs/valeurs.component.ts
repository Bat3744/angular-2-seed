import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  //moduleId: module.id,
  selector:    'valeurs',
  templateUrl: 'valeurs.component.html'
})

export class ValeursComponent {

  srcImg1 = require('../../static/img1-2.png');
  srcImg2 = require('../../static/img2-2.png');

  valeursData = require("./valeursData.json");

}

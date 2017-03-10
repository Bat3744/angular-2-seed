import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  //moduleId: module.id,
  selector:    'prestations',
  templateUrl: 'prestations.component.html'
})

export class PrestationsComponent {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  prestationsData = require("./prestationsData.json");

  enSavoirPlusClick = function(elt) {

    let htmlPopin = this.buildPopinDetail(elt);

    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(htmlPopin)
      .open();
  };

  buildPopinDetail = function(refPrestation) {
    return require('./detailPrestation/sorbonneReception.html');
  }

}

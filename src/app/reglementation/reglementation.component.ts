import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  //moduleId: module.id,
  selector:    'reglementation',
  templateUrl: 'reglementation.component.html'
})

export class ReglementationComponent {

	constructor(private sanitized: DomSanitizer) {}

	diagramEssaiSVG = this.sanitized.bypassSecurityTrustHtml(require('../../static/diag_essais.svg'));
	reglementation1Src = require('../../static/reglementation_1.png');
	reglementation2Src = require('../../static/reglementation_2.png');
}

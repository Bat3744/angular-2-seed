import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  //moduleId: module.id,
  selector:    'prestations',
  templateUrl: 'prestations.component.html'
})

export class PrestationsComponent {

  srcimage = './dist/app/static/img_sorbone.jpg';
  srcimage2 = './app/static/img_sorbone.jpg';

}
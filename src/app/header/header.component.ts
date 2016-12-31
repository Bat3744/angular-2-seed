import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
  //moduleId: module.id,
  selector:    'header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {

  srcLogo = require('../static/logo.jpg');

}
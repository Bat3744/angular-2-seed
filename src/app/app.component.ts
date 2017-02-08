import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeaderComponent } from './header/header.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  //moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
}

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { MenuComponent }   from './menu/menu.component';
import { HeaderComponent }   from './header/header.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { ValeursService } from './valeurs/valeurs.service';
import { PrestationsComponent } from './prestations/prestations.component';
import { DevisComponent } from './devis/devis.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ValeursComponent,
    PrestationsComponent,
    DevisComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ],
  providers: [ ValeursService ]
})
export class AppModule {

}

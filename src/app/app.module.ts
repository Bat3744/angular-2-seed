import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { RecaptchaModule } from 'ng2-recaptcha';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { ValeursService } from './valeurs/valeurs.service';
import { ReglementationComponent } from './reglementation/reglementation.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { DevisComponent } from './devis/devis.component';
import { DevisService } from './devis/devis.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ValeursComponent,
    ReglementationComponent,
    PrestationsComponent,
    DevisComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'control-air'}),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BootstrapModalModule,
    ModalModule.forRoot(),
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ],
  providers: [ ValeursService, DevisService ]
})
export class AppModule {

}

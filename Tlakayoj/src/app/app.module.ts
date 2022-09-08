import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { MenuadminComponent } from './components/menuadmin/menuadmin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClinicasComponent } from './pages/clinicas/clinicas.component';
import { ClinicasadminComponent } from './pages/clinicas/clinicasadmin/clinicasadmin.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { MedicosadminComponent } from './pages/medicos/medicosadmin/medicosadmin.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { InstitucionesadminComponent } from './pages/instituciones/institucionesadmin/institucionesadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    MenuadminComponent,
    FooterComponent,
    ClinicasComponent,
    ClinicasadminComponent,
    MedicosComponent,
    MedicosadminComponent,
    InstitucionesComponent,
    InstitucionesadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

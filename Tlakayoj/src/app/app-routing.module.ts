import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { ClinicasadminComponent } from './pages/clinicas/clinicasadmin/clinicasadmin.component';
import { InstitucionesComponent } from './pages/instituciones/instituciones.component';
import { ClinicasComponent } from './pages/clinicas/clinicas.component';
import { InstitucionesadminComponent } from './pages/instituciones/institucionesadmin/institucionesadmin.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { MedicosadminComponent } from './pages/medicos/medicosadmin/medicosadmin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent},

  { path: 'clinicas', component: ClinicasComponent },
  { path: 'clinicas/admin', component: ClinicasadminComponent },

  { path: 'instituciones', component: InstitucionesComponent },
  { path: 'instituciones/admin', component: InstitucionesadminComponent },

  { path: 'medicos', component: MedicosComponent },
  { path: 'medicos/admin', component: MedicosadminComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

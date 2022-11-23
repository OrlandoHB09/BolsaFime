import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { LoginGeneralComponent } from './components/login-general/login-general.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { AgregarVacanteComponent } from './components/agregar-vacante/agregar-vacante.component';
import { EditVacanteComponent } from './components/edit-vacante/edit-vacante.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HeaderLogedComponent } from './components/header-loged/header-loged.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RegistroAspiranteComponent } from './components/registro-aspirante/registro-aspirante.component';
import { AspirantesComponent } from './components/aspirantes/aspirantes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  { path: 'inicio', component: Component },
  { path: '', component: PrincipalComponent },
  { path: 'login', component: LoginGeneralComponent},
  {path:'pruebas', component: PruebasComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'headerLog', component: HeaderLogedComponent},
  {path:'registro-empresas', component: RegistroEmpresaComponent},
  {path:'registro-aspirante', component: RegistroAspiranteComponent},
  {path:'add-vacante', component: AgregarVacanteComponent},
  {path:'edit-vacante', component: EditVacanteComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'eventos', component: EventosComponent},
  {path:'calendario', component: CalendarioComponent},
  {path:'aspirantes', component: AspirantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
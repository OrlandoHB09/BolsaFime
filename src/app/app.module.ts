import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryModule } from  'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';

import { AppComponent } from './app.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { LoginGeneralComponent } from './components/login-general/login-general.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components//header/header.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { AgregarVacanteComponent } from './components/agregar-vacante/agregar-vacante.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EditVacanteComponent } from './components/edit-vacante/edit-vacante.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HeaderLogedComponent } from './components/header-loged/header-loged.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { VacantesCargadasComponent } from './components/vacantes-cargadas/vacantes-cargadas.component';
import { AspirantesComponent } from './components/aspirantes/aspirantes.component';
import { VacantesDisponiblesComponent } from './components/vacantes-disponibles/vacantes-disponibles.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    LoginGeneralComponent,
    HeaderComponent,
    RegistroEmpresaComponent,
    AgregarVacanteComponent,
    CarouselComponent,
    EditVacanteComponent,
    NosotrosComponent,
    HeaderLogedComponent,
    EventosComponent,
    CalendarioComponent,
    VacantesCargadasComponent,
    AspirantesComponent,
    VacantesDisponiblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

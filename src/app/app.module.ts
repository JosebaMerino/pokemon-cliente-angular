import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PokefiltroPipe } from './pipes/pokefiltro.pipe';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { CrearPokemonComponent } from './paginas/crear-pokemon/crear-pokemon.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NumeroElementosPipe } from './pipes/numero-elementos.pipe';
import { LoginComponent } from './paginas/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PokefiltroPipe,
    PokemonComponent,
    CrearPokemonComponent,
    NavbarComponent,
    NumeroElementosPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Modulo para hacer ruteo
    HttpClientModule, // Modulo para llamadas por HTTP
    FormsModule,
    NgbModule,
    ReactiveFormsModule, // Para los formularios reactivos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

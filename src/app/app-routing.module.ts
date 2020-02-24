import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PokemonComponent } from './paginas/pokemon/pokemon.component';
import { CrearPokemonComponent } from './paginas/crear-pokemon/crear-pokemon.component';
import { LoginComponent } from './paginas/login/login.component';
import { BackofficeComponent } from './paginas/backoffice/backoffice.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'pokemon', component: CrearPokemonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'backoffice', component: BackofficeComponent, canActivate: [LoginGuard] }
];

export const RUTAS = [
  {
    URL: '/pokemon',
    nombre: 'Crear',
    privado: true
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent}
];

export const RUTAS = [
  {
    nombre: 'principal',
    URL: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

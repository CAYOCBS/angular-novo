import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import {AlunosComponent} from './views/alunos/alunos.component';
import { RouterOutlet } from '@angular/router';
// Definição das rotas
 export const routes: Routes = [{
  path:"",
component: HomeComponent,

 },
{ 
  path:"alunos",
  component: AlunosComponent,
}];

// Configuração do módulo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterOutlet],
  exports: [RouterModule, RouterOutlet
]
})
export class AppRoutingModule { }
// Exportação do módulo de roteamento para ser usado em outros módulos
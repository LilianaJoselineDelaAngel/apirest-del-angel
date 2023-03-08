import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ListaComponent } from './Alumnos/lista/lista.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { FormularioComponent } from './Alumnos/formulario/formulario.component';
//localhost/inicio -> inicio.component
const routes: Routes = [
  // { path: '', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'vistas',
    children: [
      { path: 'tabla', component: TablaComponent },
      { path: 'lista', component: ListaComponent },
    ],
  },
  { path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

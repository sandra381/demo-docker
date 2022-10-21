import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';

import { ProductyservComponent } from './components/productyserv/productyserv.component';
import { PromocionesComponent } from './components/promociones/promociones.component';


const routes: Routes = [
  {path:'' ,component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

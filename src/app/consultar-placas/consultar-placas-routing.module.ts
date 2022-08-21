import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarPlacasPage } from './consultar-placas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPlacasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPlacasPageRoutingModule {}

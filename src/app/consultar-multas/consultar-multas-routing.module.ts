import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarMultasPage } from './consultar-multas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarMultasPageRoutingModule {}

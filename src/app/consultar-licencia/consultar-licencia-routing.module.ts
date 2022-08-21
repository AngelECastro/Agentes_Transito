import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarLicenciaPage } from './consultar-licencia.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarLicenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarLicenciaPageRoutingModule {}

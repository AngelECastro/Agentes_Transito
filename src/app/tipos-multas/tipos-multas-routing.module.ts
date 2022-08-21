import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposMultasPage } from './tipos-multas.page';

const routes: Routes = [
  {
    path: '',
    component: TiposMultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposMultasPageRoutingModule {}

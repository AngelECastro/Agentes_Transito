import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarLicenciaPageRoutingModule } from './consultar-licencia-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConsultarLicenciaPage } from './consultar-licencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarLicenciaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ConsultarLicenciaPage]
})
export class ConsultarLicenciaPageModule {}

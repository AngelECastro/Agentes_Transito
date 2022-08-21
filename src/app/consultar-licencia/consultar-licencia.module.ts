import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarLicenciaPageRoutingModule } from './consultar-licencia-routing.module';

import { ConsultarLicenciaPage } from './consultar-licencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarLicenciaPageRoutingModule
  ],
  declarations: [ConsultarLicenciaPage]
})
export class ConsultarLicenciaPageModule {}

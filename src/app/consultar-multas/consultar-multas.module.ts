import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarMultasPageRoutingModule } from './consultar-multas-routing.module';

import { ConsultarMultasPage } from './consultar-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarMultasPageRoutingModule
  ],
  declarations: [ConsultarMultasPage]
})
export class ConsultarMultasPageModule {}

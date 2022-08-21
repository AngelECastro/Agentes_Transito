import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarPlacasPageRoutingModule } from './consultar-placas-routing.module';

import { ConsultarPlacasPage } from './consultar-placas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarPlacasPageRoutingModule
  ],
  declarations: [ConsultarPlacasPage]
})
export class ConsultarPlacasPageModule {}

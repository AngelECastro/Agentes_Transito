import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarMultasPageRoutingModule } from './consultar-multas-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConsultarMultasPage } from './consultar-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarMultasPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ConsultarMultasPage]
})
export class ConsultarMultasPageModule {}

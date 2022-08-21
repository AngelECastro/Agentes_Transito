import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposMultasPageRoutingModule } from './tipos-multas-routing.module';

import { TiposMultasPage } from './tipos-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposMultasPageRoutingModule
  ],
  declarations: [TiposMultasPage]
})
export class TiposMultasPageModule {}

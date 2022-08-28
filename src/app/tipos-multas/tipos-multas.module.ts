import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposMultasPageRoutingModule } from './tipos-multas-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TiposMultasPage } from './tipos-multas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposMultasPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TiposMultasPage]
})
export class TiposMultasPageModule {}

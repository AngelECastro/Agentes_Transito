import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

import { ClimaPageRoutingModule } from './clima-routing.module';

import { ClimaPage } from './clima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ClimaPageRoutingModule
  ],
  declarations: [ClimaPage]
})
export class ClimaPageModule {}

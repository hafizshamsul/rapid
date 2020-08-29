import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomnamesubPageRoutingModule } from './roomnamesub-routing.module';

import { RoomnamesubPage } from './roomnamesub.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomnamesubPageRoutingModule,
    SharedModule
  ],
  declarations: [RoomnamesubPage]
})
export class RoomnamesubPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomnamePageRoutingModule } from './roomname-routing.module';

import { RoomnamePage } from './roomname.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomnamePageRoutingModule,
    SharedModule
  ],
  declarations: [RoomnamePage]
})
export class RoomnamePageModule {}

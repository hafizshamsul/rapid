import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../SharedModule';

import { IonicModule } from '@ionic/angular';

import { RoomcreatePageRoutingModule } from './roomcreate-routing.module';

import { RoomcreatePage } from './roomcreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RoomcreatePageRoutingModule
  ],
  declarations: [RoomcreatePage]
})
export class RoomcreatePageModule {}

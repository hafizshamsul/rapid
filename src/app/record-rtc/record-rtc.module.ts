import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordRtcPageRoutingModule } from './record-rtc-routing.module';

import { RecordRtcPage } from './record-rtc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RecordRtcPageRoutingModule
  ],
  declarations: [RecordRtcPage]
})
export class RecordRtcPageModule {}

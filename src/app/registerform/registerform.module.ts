import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterformPageRoutingModule } from './registerform-routing.module';

import { RegisterformPage } from './registerform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterformPageRoutingModule
  ],
  declarations: [RegisterformPage]
})
export class RegisterformPageModule {}

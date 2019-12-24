import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowcustomerPageRoutingModule } from './showcustomer-routing.module';

import { ShowcustomerPage } from './showcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowcustomerPageRoutingModule
  ],
  declarations: [ShowcustomerPage]
})
export class ShowcustomerPageModule {}

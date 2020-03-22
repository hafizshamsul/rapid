import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitpostPageRoutingModule } from './submitpost-routing.module';

import { SubmitpostPage } from './submitpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitpostPageRoutingModule
  ],
  declarations: [SubmitpostPage]
})
export class SubmitpostPageModule {}

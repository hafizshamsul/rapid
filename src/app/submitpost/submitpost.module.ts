import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitpostPageRoutingModule } from './submitpost-routing.module';

import { SubmitpostPage } from './submitpost.page';

import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuillModule.forRoot({
      modules: {
        syntax: true
      }
    }),
    SubmitpostPageRoutingModule
  ],
  declarations: [SubmitpostPage]
})
export class SubmitpostPageModule {}

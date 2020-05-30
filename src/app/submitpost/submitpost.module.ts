import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../SharedModule';

import { IonicModule } from '@ionic/angular';

import { SubmitpostPageRoutingModule } from './submitpost-routing.module';

import { SubmitpostPage } from './submitpost.page';

import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    }),
    SubmitpostPageRoutingModule
  ],
  declarations: [SubmitpostPage]
})
export class SubmitpostPageModule {}

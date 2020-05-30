import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../SharedModule';
import { IonicModule } from '@ionic/angular';

import { EditpostPageRoutingModule } from './editpost-routing.module';

import { EditpostPage } from './editpost.page';

import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    }),
    EditpostPageRoutingModule
  ],
  declarations: [EditpostPage]
})
export class EditpostPageModule {}

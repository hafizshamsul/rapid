import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ThreadPageRoutingModule } from './thread-routing.module';
import { ThreadPage } from './thread.page';

import { StripHtmlPipe } from '../striphtml.pipe';
import { SharedModule } from '../SharedModule';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    }),
    ThreadPageRoutingModule
  ],
  declarations: [ThreadPage]
})
export class ThreadPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomnamePageRoutingModule } from './roomname-routing.module';

import { RoomnamePage } from './roomname.page';

import { StripHtmlPipe } from '../striphtml.pipe';
import { SharedModule } from '../SharedModule';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomnamePageRoutingModule,
    SharedModule,
    QuillModule.forRoot({
      modules: {
        syntax: false
      }
    })
  ],
  declarations: [RoomnamePage]
})
export class RoomnamePageModule {}

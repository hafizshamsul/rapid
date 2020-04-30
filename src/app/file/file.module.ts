import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import { SharedModule } from '../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilePageRoutingModule,
    SharedModule
  ],
  declarations: [FilePage]
})
export class FilePageModule {}

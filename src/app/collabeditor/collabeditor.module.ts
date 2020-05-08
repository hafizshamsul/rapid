import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollabeditorPageRoutingModule } from './collabeditor-routing.module';

import { CollabeditorPage } from './collabeditor.page';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollabeditorPageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [CollabeditorPage]
})
export class CollabeditorPageModule {}

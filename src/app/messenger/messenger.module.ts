import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessengerPageRoutingModule } from './messenger-routing.module';

import { MessengerPage } from './messenger.page';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://192.168.0.137:3001', options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessengerPageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [MessengerPage]
})
export class MessengerPageModule {}

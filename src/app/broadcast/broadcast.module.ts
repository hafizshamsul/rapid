import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadcastPageRoutingModule } from './broadcast-routing.module';

import { BroadcastPage } from './broadcast.page';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadcastPageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [BroadcastPage]
})
export class BroadcastPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchPageRoutingModule } from './watch-routing.module';

import { WatchPage } from './watch.page';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://192.168.0.137:4000', options: {} };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchPageRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  declarations: [WatchPage]
})
export class WatchPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admin_userPageRoutingModule } from './admin_user-routing.module';

import { Admin_userPage } from './admin_user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admin_userPageRoutingModule
  ],
  declarations: [Admin_userPage]
})
export class Admin_userPageModule {}

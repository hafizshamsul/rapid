import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admin_docPageRoutingModule } from './admin_doc-routing.module';

import { Admin_docPage } from './admin_doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admin_docPageRoutingModule
  ],
  declarations: [Admin_docPage]
})
export class Admin_docPageModule {}

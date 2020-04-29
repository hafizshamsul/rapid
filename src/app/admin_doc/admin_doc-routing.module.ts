import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admin_docPage } from './admin_doc.page';

const routes: Routes = [
  {
    path: '',
    component: Admin_docPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admin_docPageRoutingModule {}

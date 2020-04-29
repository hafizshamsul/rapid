import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admin_userPage } from './admin_user.page';

const routes: Routes = [
  {
    path: '',
    component: Admin_userPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admin_userPageRoutingModule {}

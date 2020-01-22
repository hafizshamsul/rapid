import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterformPage } from './registerform.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterformPageRoutingModule {}

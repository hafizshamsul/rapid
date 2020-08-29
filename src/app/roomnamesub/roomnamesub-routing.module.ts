import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomnamesubPage } from './roomnamesub.page';

const routes: Routes = [
  {
    path: '',
    component: RoomnamesubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomnamesubPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomcreatePage } from './roomcreate.page';

const routes: Routes = [
  {
    path: '',
    component: RoomcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomcreatePageRoutingModule {}

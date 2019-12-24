import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcustomerPage } from './showcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcustomerPageRoutingModule {}

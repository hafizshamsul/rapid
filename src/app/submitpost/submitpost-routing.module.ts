import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitpostPage } from './submitpost.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitpostPageRoutingModule {}

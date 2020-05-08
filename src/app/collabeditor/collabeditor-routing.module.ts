import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollabeditorPage } from './collabeditor.page';

const routes: Routes = [
  {
    path: '',
    component: CollabeditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollabeditorPageRoutingModule {}

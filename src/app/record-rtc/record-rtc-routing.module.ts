import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordRtcPage } from './record-rtc.page';

const routes: Routes = [
  {
    path: '',
    component: RecordRtcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordRtcPageRoutingModule {}

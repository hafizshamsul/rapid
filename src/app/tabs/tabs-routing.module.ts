import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [ {
    path: 'r', component: TabsPage, children: [
      { path: 'home', children: [ { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) }, { path: ':r_thread', loadChildren: () => import('../thread/thread.module').then(m => m.ThreadPageModule) }  ] },
      { path: ':r_username', children: [ { path: '', loadChildren: () => import('../folder/folder.module').then(m => m.FolderPageModule) }, { path: ':r_folderid', loadChildren: () => import('../file/file.module').then(m => m.FilePageModule) } ] },
      { path: 'tab3', children: [ { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) }, { path: ':r_folderid', loadChildren: () => import('../file/file.module').then(m => m.FilePageModule) } ] },
      { path: '', redirectTo: '/r/home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/r/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

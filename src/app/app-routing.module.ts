import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'loginform', pathMatch: 'full' },
  
  { path: 'addcustomer', loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)},
  { path: 'addcustomer/:id/:name/:desc', loadChildren: () => import('./addcustomer/addcustomer.module').then(m=>m.AddcustomerPageModule)},
  { path: 'showcustomer/:r_id', loadChildren: () => import('./showcustomer/showcustomer.module').then( m => m.ShowcustomerPageModule)},
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)},
  //{ path: 'thread/:r_thread', loadChildren: () => import('./thread/thread.module').then( m => m.ThreadPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    
  //{ path: ':r_username', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule) },
  //{ path: ':r_username/:r_folderid/', loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)},

  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'loginform', loadChildren: () => import('./loginform/loginform.module').then( m => m.LoginformPageModule) },
  { path: 'registerform', loadChildren: () => import('./registerform/registerform.module').then( m => m.RegisterformPageModule) },
  
  { path: '', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule) },
  { path: 'submitpost', loadChildren: () => import('./submitpost/submitpost.module').then( m => m.SubmitpostPageModule) },
  
  {
    path: 'editpost',
    loadChildren: () => import('./editpost/editpost.module').then( m => m.EditpostPageModule)
  },  {
    path: 'messenger',
    loadChildren: () => import('./messenger/messenger.module').then( m => m.MessengerPageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

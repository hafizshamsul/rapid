import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loginform', pathMatch: 'full' },
  { path: 'folder/customer/:folderid', loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)},
  { path: 'addcustomer', loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)},
  { path: 'addcustomer/:id/:name/:desc', loadChildren: () => import('./addcustomer/addcustomer.module').then(m=>m.AddcustomerPageModule)},
  { path: 'showcustomer/:id', loadChildren: () => import('./showcustomer/showcustomer.module').then( m => m.ShowcustomerPageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)},
  {
    path: 'loginform',
    loadChildren: () => import('./loginform/loginform.module').then( m => m.LoginformPageModule)
  },
  {
    path: 'registerform',
    loadChildren: () => import('./registerform/registerform.module').then( m => m.RegisterformPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

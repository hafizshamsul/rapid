import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)},
  { path: 'addcustomer', loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)},
  { path: 'addcustomer/:id/:name/:desc', loadChildren: () => import('./addcustomer/addcustomer.module').then(m=>m.AddcustomerPageModule)},
  { path: 'showcustomer/:id/:name/:desc', loadChildren: () => import('./showcustomer/showcustomer.module').then( m => m.ShowcustomerPageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

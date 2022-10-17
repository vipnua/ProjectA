import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './admin/components/product-add/product-add.component';
import { ProductListComponent } from './admin/components/product-list/product-list.component';


import { MainLoginComponent } from './admin/auth/layouts/main-login/main-login.component';

import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';


const routes: Routes = [

 {path:'admin/login',component:MainLoginComponent},
  {
    path: 'admin', component: AdminMainComponent, children: [
      { path: 'products', component: ProductListComponent },
      { path: 'product-add', component: ProductAddComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductAddComponent } from './admin/components/product-add/product-add.component';
import { ProductListComponent } from './admin/components/product-list/product-list.component';
import { ProductUpdateComponent } from './admin/components/product-update/product-update.component';



import { HomePageComponent } from './pages/home-page/home-page.component';

import { MainLoginComponent } from './admin/auth/layouts/main-login/main-login.component';

import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';


const routes: Routes = [


 {path:'admin/login',component:MainLoginComponent},
  {
    path: 'admin', component: AdminMainComponent, children: [
      { path: 'products', component: ProductListComponent },
      { path: 'product-add', component: ProductAddComponent },
      { path: 'product/:id/edit', component: ProductUpdateComponent }
    ]
  }
,
  { path: '', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

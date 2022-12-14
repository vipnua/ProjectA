import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductAddComponent } from './admin/components/product-add/product-add.component';
import { ProductListComponent } from './admin/components/product-list/product-list.component';
import { ProductUpdateComponent } from './admin/components/product-update/product-update.component';



import { HomePageComponent } from './pages/home-page/home-page.component';

import { MainLoginComponent } from './admin/auth/layouts/main-login/main-login.component';

import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';
import { AuthMainComponent } from './auth/layouts/auth-main/auth-main.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



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
  { path: 'users', component: AuthMainComponent, children:[
    { path: 'login', component: LoginComponent },
    { path: 'signin', component:SigninComponent },
  ]},
  { path: 'home', component: HomePageComponent},
  {path:'product/:id', component:ProductDetailComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

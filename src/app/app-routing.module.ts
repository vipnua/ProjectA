import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginComponent } from './admin/auth/layouts/main-login/main-login.component';
import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';


const routes: Routes = [
  {path:'admin/login',component:MainLoginComponent},
  {path:'admin',component:AdminMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

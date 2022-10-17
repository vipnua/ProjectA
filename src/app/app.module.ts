import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminHeaderComponent } from './admin/layouts/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/layouts/admin-footer/admin-footer.component';
import { AdminSiderBarComponent } from './admin/layouts/admin-sider-bar/admin-sider-bar.component';
import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';
import { ContentComponent } from './admin/components/content/content.component';

import { ProductAddComponent } from './admin/components/product-add/product-add.component';
import { ProductListComponent } from './admin/components/product-list/product-list.component';
import { ProductDetailComponent } from './admin/components/product-detail/product-detail.component';



import { AdminLoginComponent } from './admin/auth/admin-login/admin-login.component';
import { FooterLoginComponent } from './admin/auth/layouts/footer-login/footer-login.component';
import { HearderLoginComponent } from './admin/auth/layouts/hearder-login/hearder-login.component';
import { MainLoginComponent } from './admin/auth/layouts/main-login/main-login.component';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthHeaderComponent } from './auth/layouts/auth-header/auth-header.component';
import { AuthFooterComponent } from './auth/layouts/auth-footer/auth-footer.component';
import { AuthMainComponent } from './auth/layouts/auth-main/auth-main.component';


@NgModule({
  declarations: [
    AppComponent,

    ProductPageComponent,
    HomePageComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSiderBarComponent,
    AdminMainComponent,
    ContentComponent,

    ProductListComponent,
    ProductAddComponent,
    ProductDetailComponent,

    AdminLoginComponent,
    FooterLoginComponent,
    HearderLoginComponent,
    MainLoginComponent,
    LoginComponent,
    SigninComponent,
    AuthFooterComponent,
    AuthMainComponent,
    AuthHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

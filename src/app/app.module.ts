import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './admin/layouts/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/layouts/admin-footer/admin-footer.component';
import { AdminSiderBarComponent } from './admin/layouts/admin-sider-bar/admin-sider-bar.component';
import { AdminMainComponent } from './admin/layouts/admin-main/admin-main.component';
import { ContentComponent } from './admin/components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSiderBarComponent,
    AdminMainComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

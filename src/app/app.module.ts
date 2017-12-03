import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@Angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarMenuService } from './sidebar-menu.service';
import { ApiService } from './api.service';
import { ProductsService } from './__services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SidebarMenuService,
    ApiService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

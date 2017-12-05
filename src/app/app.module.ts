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
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AddProductsComponent,
    ListProductsComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    DashboardViewComponent
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

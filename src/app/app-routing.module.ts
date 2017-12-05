import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'products/add', component: AddProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'categories/add', component: AddCategoriesComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: '', component: DashboardViewComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

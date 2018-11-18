import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import { RProductService } from "./services/reg/r-product.service";
import { RCategoryService } from "./services/reg/r-category.service";
import { RConfigService } from "./services/reg/r-config.service";

import { RCustomerService } from "./services/reg/r-customer.service";
import { RegProductComponent } from './pages/reg/reg-product/reg-product.component';
import { RegCategoryComponent } from './pages/reg/reg-category/reg-category.component';
import { RegCategoryListComponent } from './pages/reg/reg-category-list/reg-category-list.component';
import { RegProductListComponent } from './pages/reg/reg-product-list/reg-product-list.component';
import { RegCustomerComponent } from './pages/reg/reg-customer/reg-customer.component';
import { RegCustomerListComponent } from './pages/reg/reg-customer-list/reg-customer-list.component';

const appRoutes: Routes = [
  {
    path: "reg/products",
    component: RegProductListComponent,
    data: { breadcrumb: "Product List" }
  },
  {
    path: "reg/products/new",
    component: RegProductComponent,
    data: { breadcrumb: "Register Product" }
  },
  {
    path: "reg/products/:id",
    component: RegProductComponent,
    data: { breadcrumb: "Register Product" }
  },
  {
    path: "reg/categories",
    component: RegCategoryListComponent,
    data: { breadcrumb: "List Category" }
  },
  {
    path: "reg/categories/:id",
    component: RegCategoryComponent,
    data: { breadcrumb: "Register Category" }
  },
  {
    path: "reg/customers",
    component: RegCustomerListComponent,
    data: { breadcrumb: "List Customer" }
  },
  {
    path: "reg/customers/:id",
    component: RegCustomerComponent,
    data: { breadcrumb: "Register Customer" }
  },
  {
    path: "",
    redirectTo: "reg/products",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegProductComponent,
    RegCategoryComponent,
    RegCategoryListComponent,
    RegProductListComponent,
    RegCustomerComponent,
    RegCustomerListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    RProductService,
    RCategoryService,
    RConfigService,
    RCustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

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
import { RegProductComponent } from './pages/reg/reg-product/reg-product.component';
import { RegCategoryComponent } from './pages/reg/reg-category/reg-category.component';
import { RegCategoryListComponent } from './pages/reg/reg-category-list/reg-category-list.component';

const appRoutes: Routes = [
  {
    path: "home",
    component: RegProductComponent,
    data: { breadcrumb: "Register Product" }
  },
  {
    path: "category",
    component: RegCategoryListComponent,
    data: { breadcrumb: "List Category" }
  },
  {
    path: "category/new",
    component: RegCategoryComponent,
    data: { breadcrumb: "Register Category" }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegProductComponent,
    RegCategoryComponent,
    RegCategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RProductService, RCategoryService, RConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}

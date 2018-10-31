import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";

import { RProductService } from "./services/reg/r-product.service";
import { RCategoryService } from "./services/reg/r-category.service";
import { RegProductComponent } from './pages/reg/reg-product/reg-product.component';
import { RegCategoryComponent } from './pages/reg/reg-category/reg-category.component';
import { RegCategoryListComponent } from './pages/reg/reg-category-list/reg-category-list.component';

const appRoutes: Routes = [
  {
    path: "home",
    component: RegProductComponent,
    data: { breadcrumb: "Register Product" }
  }
];

@NgModule({
  declarations: [AppComponent, RegProductComponent, RegCategoryComponent, RegCategoryListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RProductService, RCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}

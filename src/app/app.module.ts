import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RProductService } from "./services/reg/r-product.service";
import { RCategoryService } from "./services/reg/r-category.service";
import { RegProductComponent } from './pages/reg/reg-product/reg-product.component';
import { RegCategoryComponent } from './pages/reg/reg-category/reg-category.component';

@NgModule({
  declarations: [AppComponent, RegProductComponent, RegCategoryComponent],
  imports: [BrowserModule],
  providers: [RProductService, RCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}

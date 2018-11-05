import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IProduct, RProductService } from '../../../services/reg/r-product.service';
import {
  RCategoryService,
  ICategory
} from "../../../services/reg/r-category.service";

@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit {
  productInfo: IProduct;
  categories: ICategory[];
  constructor(private productSvc: RProductService, private router: Router,
      private categorySvc: RCategoryService) {
    this.productInfo = {} as IProduct;
    this.categories = [];
  }

  ngOnInit() {
    this.categorySvc.getAll().subscribe(cats => {
      this.categories = cats;
    });
  }

  save() {
    this.productSvc.save(this.productInfo).subscribe(product => console.log(product));
    this.router.navigate(['/product']);
  }
  
  cancel() {
    this.router.navigate(['/product']);
  }
}

import { Component, OnInit } from '@angular/core';
import { RProductService, IProduct } from '../../../services/reg/r-product.service'
import { Router } from "@angular/router";

@Component({
  selector: "app-reg-product-list",
  templateUrl: "./reg-product-list.component.html",
  styleUrls: ["./reg-product-list.component.css"]
})
export class RegProductListComponent implements OnInit {
  products: IProduct[];
  constructor(private productSvc: RProductService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productSvc.getAll().subscribe(products => {
      this.products = products;
    });
  }

  newProduct() {
    this.router.navigate(["/reg/products/new"]);
  }

  openProduct(id: string) {
    this.router.navigate(["/reg/products/" + id]);
  }

  openCart() {
    this.router.navigate([""]);
  }

  removeProduct(productId: string) {
    this.productSvc.remove(productId).subscribe(product => {
      this.loadProducts();
    });
  }
}

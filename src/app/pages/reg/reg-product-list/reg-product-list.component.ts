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

  ngOnInit() {}
}

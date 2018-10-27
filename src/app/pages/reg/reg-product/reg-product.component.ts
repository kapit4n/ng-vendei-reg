import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit {
  productInfo: any;
  constructor() {
    this.productInfo = {};
  }

  ngOnInit() {
  }

}

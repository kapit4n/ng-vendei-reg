import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../services/reg/r-product.service';

@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit {
  productInfo: IProduct;
  constructor() {
    this.productInfo = {} as IProduct;
  }

  ngOnInit() {
  }

  cancel() {
    console.log("cancel operation");
  }
  

  save() {
    console.log("call api to save");
  }


}

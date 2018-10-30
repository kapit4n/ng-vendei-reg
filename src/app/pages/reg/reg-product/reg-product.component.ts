import { Component, OnInit } from '@angular/core';

interface IProduct {
  id: string;
  name: string;
  code: string;
  price: number;
  cost: number;
  img: string;
  description: string;
}

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

import { Component, OnInit } from '@angular/core';
import { IProduct, RProductService } from '../../../services/reg/r-product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit {
  productInfo: IProduct;
  constructor(private productSvc: RProductService, private router: Router) {
    this.productInfo = {} as IProduct;
  }

  ngOnInit() {
  }
  save() {
    this.productSvc.save(this.productInfo).subscribe(product => console.log(product));
    this.router.navigate(['/product']);
  }
  
  cancel() {
    this.router.navigate(['/product']);
  }
}

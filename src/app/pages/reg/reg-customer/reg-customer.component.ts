import { Component, OnInit } from '@angular/core';
import {
  ICustomer,
  RCustomerService
} from "../../../services/reg/r-customer.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reg-customer',
  templateUrl: './reg-customer.component.html',
  styleUrls: ['./reg-customer.component.css']
})
export class RegCustomerComponent implements OnInit {
  customerInfo: ICustomer;
  constructor(
    private customerSvc: RCustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.customerInfo = {} as ICustomer;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != "new") {
      this.customerSvc.getById(id).subscribe(cat => {
        this.customerInfo = cat;
      });
    }
  }

  save() {
    if (this.customerInfo.id) {
      this.customerSvc.update(this.customerInfo).subscribe(cat => {
        this.router.navigate(["reg/customers"]);
      });
    } else {
      this.customerSvc.save(this.customerInfo).subscribe(cat => {
        this.router.navigate(["reg/customers"]);
      });
    }

  }

  cancel() {
    this.router.navigate(["reg/customers"]);
  }
}
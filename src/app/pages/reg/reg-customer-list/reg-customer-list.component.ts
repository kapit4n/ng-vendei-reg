import { Component, OnInit } from '@angular/core';
import {
  RCustomerService,
  ICustomer
} from "../../../services/reg/r-customer.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reg-customer-list',
  templateUrl: './reg-customer-list.component.html',
  styleUrls: ['./reg-customer-list.component.css']
})
export class RegCustomerListComponent implements OnInit {

  customers: ICustomer[];
  constructor(private customerSvc: RCustomerService, private router: Router) { }

  ngOnInit() {
    this.customerSvc.getAll().subscribe(c => {
      this.customers = c;
    });
  }

  newCustomer() {
    this.router.navigate(['reg/customers/new']);
  }

  openCustomer(id: string) {
    this.router.navigate(['reg/customers/' + id]);
  }


}

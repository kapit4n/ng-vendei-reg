import { Component, OnInit } from '@angular/core';
import { ICategory } from "../../../services/reg/r-category.service";

@Component({
  selector: "app-reg-category",
  templateUrl: "./reg-category.component.html",
  styleUrls: ["./reg-category.component.css"]
})
export class RegCategoryComponent implements OnInit {
  categoryInfo: ICategory;
  constructor() {
    this.categoryInfo = {} as ICategory;
  }

  ngOnInit() {

  }
}

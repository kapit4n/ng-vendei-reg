import { Component, OnInit } from '@angular/core';
import { RCategoryService, ICategory } from '../../../services/reg/r-category.service'
import { Router } from "@angular/router";

@Component({
  selector: "app-reg-category-list",
  templateUrl: "./reg-category-list.component.html",
  styleUrls: ["./reg-category-list.component.css"]
})
export class RegCategoryListComponent implements OnInit {
  categories: ICategory[];
  constructor(private categorySvc: RCategoryService, private router: Router) {}

  ngOnInit() {
    this.categorySvc.getAll().subscribe(cats => {
      this.categories = cats;
    });
  }

  newCategory() {
    this.router.navigate(['/category/new']);
  }
}

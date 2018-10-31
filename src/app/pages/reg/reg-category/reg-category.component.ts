import { Component, OnInit } from '@angular/core';
import { ICategory, RCategoryService } from "../../../services/reg/r-category.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-reg-category",
  templateUrl: "./reg-category.component.html",
  styleUrls: ["./reg-category.component.css"]
})
export class RegCategoryComponent implements OnInit {
  categoryInfo: ICategory;
  constructor(private categorySvc: RCategoryService, private router: Router) {
    this.categoryInfo = {} as ICategory;
  }

  ngOnInit() {}

  save() {
    this.categorySvc.save(this.categoryInfo).subscribe(cat => console.log(cat));
    this.router.navigate(['/category']);
  }
  
  cancel() {
    this.router.navigate(['/category']);
  }
}

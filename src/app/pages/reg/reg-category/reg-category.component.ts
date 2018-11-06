import { Component, OnInit } from '@angular/core';
import { ICategory, RCategoryService } from "../../../services/reg/r-category.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reg-category",
  templateUrl: "./reg-category.component.html",
  styleUrls: ["./reg-category.component.css"]
})
export class RegCategoryComponent implements OnInit {
  categoryInfo: ICategory;
  constructor(
    private categorySvc: RCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryInfo = {} as ICategory;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id != "new") {
      this.categorySvc.getById(id).subscribe(cat => {
        this.categoryInfo = cat;
      });
    }
  }

  save() {
    if (this.categoryInfo.id) {
      this.categorySvc.update(this.categoryInfo).subscribe(cat => {
        this.router.navigate(["/category"]);
      });
    } else {
      this.categorySvc.save(this.categoryInfo).subscribe(cat => {
        this.router.navigate(["/category"]);
      });
    }

  }

  cancel() {
    this.router.navigate(["/category"]);
  }
}

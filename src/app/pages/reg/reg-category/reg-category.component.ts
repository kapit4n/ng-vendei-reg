import { Component, OnInit } from '@angular/core';


interface ICategory {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: "app-reg-category",
  templateUrl: "./reg-category.component.html",
  styleUrls: ["./reg-category.component.css"]
})
export class RegCategoryComponent implements OnInit {
  categoryInfo: ICategory;
  constructor() {}

  ngOnInit() {}
}

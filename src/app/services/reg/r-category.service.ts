import { Injectable } from '@angular/core';

export interface ICategory {
  id: string;
  name: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class RCategoryService {

  constructor() { }
}

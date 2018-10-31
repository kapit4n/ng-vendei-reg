import { Injectable } from '@angular/core';

export interface IProduct {
  id: string;
  name: string;
  code: string;
  price: number;
  cost: number;
  img: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class RProductService {

  constructor() { }
}

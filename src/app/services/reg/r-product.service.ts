import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RConfigService } from "./r-config.service";

import { RCrudInterface } from './r-crud.interface';
import { Observable } from 'rxjs';

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
  providedIn: "root"
})
export class RProductService implements RCrudInterface {
  modelUrl: string;
  includeCat: string;
  constructor(private http: HttpClient, private configSvc: RConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/products";
    this.includeCat = "filter[include]=category"
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.modelUrl}?${this.includeCat}`);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.modelUrl, data);
  }

}

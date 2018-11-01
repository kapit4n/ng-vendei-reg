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
  constructor(private http: HttpClient, private configSvc: RConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/products";
  }

  getAll(): Observable<any> {
    return this.http.get(this.modelUrl);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.modelUrl, data);
  }

}

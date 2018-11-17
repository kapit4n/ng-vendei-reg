import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RConfigService } from "./r-config.service";

import { RCrudInterface } from './r-crud.interface';
import { Observable } from 'rxjs';

export interface ICustomer {
  id: string;
  name: string;
  ci: string;
  img: string;
  address: string;
}
@Injectable({
  providedIn: "root"
})
export class RCustomerService implements RCrudInterface {
  modelUrl: string;
  includeCat: string;
  constructor(private http: HttpClient, private configSvc: RConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/customers";
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.modelUrl}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.modelUrl}/${id}`);
  }

  save(data: any): Observable<any> {
    return this.http.post(this.modelUrl, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${this.modelUrl}/${data.id}`, data);
  }
}

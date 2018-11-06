import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RConfigService } from "./r-config.service";

import { RCrudInterface } from './r-crud.interface'
import { Observable } from "rxjs/Rx";

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: "root"
})
export class RCategoryService implements RCrudInterface {
  modelUrl: string;
  constructor(private http: HttpClient, private configSvc: RConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/categories";
  }

  getAll(): Observable<any> {
    return this.http.get(this.modelUrl);
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

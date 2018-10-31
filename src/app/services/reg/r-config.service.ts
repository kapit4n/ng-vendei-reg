import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RConfigService {

  baseUrl = "http://localhost:3000/api"
  constructor() { }
}

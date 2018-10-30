import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

export interface RCrudInterface {
  baseUrl: string;
  getAll(): Observable<any>;
}

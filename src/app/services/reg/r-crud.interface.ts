import { Observable } from "rxjs/Rx";

export interface RCrudInterface {
  modelUrl: string;
  getAll(): Observable<object>;
  save(data): Observable<object>;
}

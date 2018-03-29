import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class MyService{
  constructor(private _http : Http){
    }
  public getData(): any{
    return this._http.get("http://localhost:8080/mongodb")
      .map((res:Response)=>res.json());
  }
}

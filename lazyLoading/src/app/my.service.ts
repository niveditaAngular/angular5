import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class MyService{
  constructor(private _http:Http){

  }
  public getData():any{
    return this._http.get("https://restcountries.eu/rest/v2/all")
      .map((res:Response)=>res.json());
  }
}

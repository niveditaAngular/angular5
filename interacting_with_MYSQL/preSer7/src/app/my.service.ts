import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import "rxjs/Rx";
@Injectable()
export class MyService{
  constructor(private  _http:Http){

  }
  public getData(login_details) : any{
    return this._http.post("http://127.0.0.1:8083/login",login_details)
      .map((res:Response) => res.json());
  }
}

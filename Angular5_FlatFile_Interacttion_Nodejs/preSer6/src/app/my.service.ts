import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
@Injectable()
export class MyService {
    public var_one: any;
	constructor(private _http: Http) {

    }

 public	getData(): any {
      return this._http.get('http://localhost:8080/static').map((res: Response) =>
         res.json()
        );
	}
}

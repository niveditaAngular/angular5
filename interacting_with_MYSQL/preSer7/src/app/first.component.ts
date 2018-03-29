import {Component} from "@angular/core";
import {MyService} from "./my.service";
@Component({
  selector : "first-app",
  templateUrl : "./first.component.html"
})
export class FirstComponent{
  public var_one : any;
  constructor(private  _myService : MyService){

  };
  public login(login_detalis) : any{
    this._myService.getData(login_detalis)
      .subscribe(res => this.var_one=res,
                 err =>console.log(err));
  };
};

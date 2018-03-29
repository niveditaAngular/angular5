import {Component} from "@angular/core";
import {MyService} from "./my.service";
@Component({
  selector : "spa-demo",
  templateUrl : "./first.component.html"
})
export class FirstComponent{
  public var_one : any;
  constructor(private  _myService:MyService)
  {
  this._myService.getData()
    .subscribe(res=>this.var_one=res,
               err=>console.log(err));
  }
}

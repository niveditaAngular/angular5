import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector:"spa-demo",
  templateUrl: "./index.component.html"
})
export class IndexComponent{
  constructor(private _router:Router){
    }
    public clickMe(){
    this._router.navigate(["/pagefour"]);
    }
}

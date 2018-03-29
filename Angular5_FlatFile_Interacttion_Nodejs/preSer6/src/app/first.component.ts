import {Component} from "@angular/core";
import {MyService} from "./my.service";
@Component({
  selector:'first-app',
  templateUrl:"./first.component.html"
})
export class FirstComponent{
	public data: any ;
	constructor(private _myService: MyService )
  {
	       this._myService.getData()
			.subscribe(res => this.data = res,
				   err => console.log(err));
	}
}

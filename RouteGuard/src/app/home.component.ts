import {Component} from "@angular/core";
@Component({
  templateUrl:"./home.component.html"
})
export class HomeComponent{
  public home:any;
  constructor(){
    this.home = "I am from home component !";
  }
}

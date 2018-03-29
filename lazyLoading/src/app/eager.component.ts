import {Component} from "@angular/core";
@Component({
  templateUrl:"./eager.component.html"
})
export class EagerComponent{
  public eager:any;
  constructor(){
    this.eager = "I am not from lazy loading !";
  }
}

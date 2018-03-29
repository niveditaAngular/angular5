import {Component} from "@angular/core";
@Component({
  templateUrl:"./pagetwo.component.html"
})
export class PagetwoComponent{
  public vartwo:any;
  constructor(){
    this.vartwo = "I am from page two component !";
  }
}

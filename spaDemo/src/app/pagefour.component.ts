import {Component} from "@angular/core";
@Component({
  templateUrl:"./pagefour.component.html";
})
export class PagefourComponent{
  public pagefour:any;
  constructor(){
    this.pagefour = "I am from page four component!!!";
  }
}

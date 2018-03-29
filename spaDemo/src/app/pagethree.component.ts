import {Component} from "@angular/core";
@Component({
  templateUrl:"./pagethree.component.html";
})
export class PagethreeComponent{
  public pagethree:any;
  constructor(){
    this.pagethree="I am from page three component!!!";
  }
}

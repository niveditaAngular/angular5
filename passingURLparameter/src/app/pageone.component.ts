import {Component} from "@angular/core";
@Component({
  templateUrl:"./pageone.component.html"
})
export class PageoneComponent{
  public varone:any;
  constructor(){
    this.varone = "I am from page one Component !";
  }
}

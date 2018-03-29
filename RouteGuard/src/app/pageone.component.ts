import {Component} from "@angular/core";
@Component({
  templateUrl:"./pageone.component.html"
})
export class PageoneComponent{
  public pageone:any;
  constructor(){
    this.pageone = "I am from page one component !";
  }
}

import {Component} from '@angular/core';
@Component ({
  templateUrl:"./childone.component.html"
})
export class ChildoneComponent{
  public childone: any;
  constructor(){
    this.childone = "i m from child one component";
  }
}

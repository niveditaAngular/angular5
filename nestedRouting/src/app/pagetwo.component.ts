import {Component} from '@angular/core';
@Component ({
  templateUrl:"./pagetwo.component.html";
})
export class PagetwoComponent{
  public pagetwo: any;
  constructor(){
    this.pagetwo="I am from page 2";
  }
}

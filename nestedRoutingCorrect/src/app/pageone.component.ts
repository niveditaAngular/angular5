import {Component} from '@angular/core';
@Component ({
  templateUrl: "./pageone.component.html"
})
export class PageoneComponent{
  public pageone: any;
  constructor(){
    this.pageone="i am from page one";
  }

}

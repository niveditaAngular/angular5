import {Component} from '@angular/core';
@Component({
  templateUrl: "./childtwo.component.html";
})
export class ChildtwoComponent{
  public childtwo: any;
  constructor() {
    this.childtwo = "i am from chil two component";
  }
}

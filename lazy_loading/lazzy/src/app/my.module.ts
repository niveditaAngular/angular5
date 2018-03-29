import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MyService} from "./my.service";
import {FirstComponent} from "./first.component";
@NgModule({
  declarations:[FirstComponent],
  imports:[CommonModule],
  providers:[MyService],
  exports:[FirstComponent]
})
export class MyModule{

}

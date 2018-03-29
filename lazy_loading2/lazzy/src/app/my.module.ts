import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MyService} from "./my.service";
import {FirstComponent} from "./first.component";
import {Routes,RouterModule} from "@angular/router";
export const appRoutes : Routes = [
  {path : '',redirectTo:'country',pathMatch:'full'},
  {path : 'country',component:FirstComponent}
];

@NgModule({
  declarations:[FirstComponent],
  imports:[CommonModule,
           RouterModule.forChild(appRoutes)],
  providers:[MyService],
  exports:[FirstComponent]
})
export class MyModule{

}

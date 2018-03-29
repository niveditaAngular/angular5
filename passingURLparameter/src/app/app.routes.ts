import {PageoneComponent} from "./pageone.component";
import {PagetwoComponent} from "./pagetwo.component";
import {Routes} from "@angular/router";
import { ChildoneComponent } from "./childone.component";
export const appRoutes:Routes = [
  {path:"pageone",component:PageoneComponent},
  {path:"pagetwo",component:PagetwoComponent,
    children:[{path:"childone/:brand",component:ChildoneComponent}]}
];

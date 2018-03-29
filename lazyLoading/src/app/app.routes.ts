import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { EagerComponent } from "./eager.component";

export const appRoutes = [
  {path:"eager",component:EagerComponent},
  {path:"lazy",loadChildren:"./my.module#MyModule"}
];

export const lazyConst:ModuleWithProviders =
  RouterModule.forRoot(appRoutes);

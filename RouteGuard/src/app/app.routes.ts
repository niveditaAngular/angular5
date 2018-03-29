/*import {Routes} from '@angular/router';
import {PageoneComponent} from 'pageone.component';
import {PagetwoComponent} from 'pagetwo.component';
import {ChildoneComponent} from 'childone.component';
import {HomeComponent} from 'home.component';
import {AuthService} from './auth.service';

export const appRoutes: Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'',
    component: PageoneComponent,
    canActivate: [AuthService],
    canActivateChild: [AuthService],
    children:[{path:'childone',
               component:ChildoneComponent}]},
  {path:'pathtwo'
        component:PagetwoComponent,
        canDeactivate: [AuthService]}
];*/


import {Routes} from "@angular/router";
import {PageoneComponent} from "./pageone.component";
import {PagetwoComponent} from "./pagetwo.component";
import {ChildoneComponent} from "./childone.component";
import {HomeComponent} from "./home.component";
import {AuthService} from "./auth.service";
export const appRoutes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},

  {path:'pageone',
    component:PageoneComponent,
    canActivate:[AuthService],
    canActivateChild:[AuthService],
    children:[{path:'childone',
      component:ChildoneComponent}]},

  {path:'pagetwo',
    component:PagetwoComponent,
    canDeactivate:[AuthService]}
];

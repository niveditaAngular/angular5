import {PageoneComponent} from './pageone.component';
import {PagetwoComponent} from './pagetwo.component';
import {ChildoneComponent} from './childone.component';
import {ChildtwoComponent} from './childtwo.component';
import {Routes} from '@angular/router';
export const appRoutes:Routes =[
  {path:"",component:PageoneComponent,children:[{path:'childone',component:ChildoneComponent}]},
  {path:"",component:PagetwoComponent,children:[{path:'childtwo',component:ChildtwoComponent}]}
];

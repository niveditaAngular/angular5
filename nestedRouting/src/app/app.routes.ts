import {PageoneComponent} from './pageone.component';
import {PagetwoComponen} from './pagetwo.component';
import {ChildoneComponent} from './childone.component';
import {ChildtwoComponent} from './childtwo.component';
import {Routes} from '@angular/router';
import {PagetwoComponent} from './pagetwo.component';
export const appRoutes:Routes =[
    {path:"",component:PageoneComponent,children:({path:"childone",component:ChildoneComponent})},
    {path:"",component:PagetwoComponent,children:({path:"childtwo",component:ChildtwoComponent})}
  ];

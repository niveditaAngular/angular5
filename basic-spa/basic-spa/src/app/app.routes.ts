import {Routes} from "@angular/router";
import {PageoneComponent} from "./components/pageone.component";
import {PagetwoComponent} from "./components/pagetwo.component";
import {PagethreeComponent} from "./components/pagethree.component";

export const appRoutes:Routes=[
    {path:"",component:PageoneComponent},
    {path:"page_two",component:PagetwoComponent},
    {path:"page_three",component:PagethreeComponent}
];
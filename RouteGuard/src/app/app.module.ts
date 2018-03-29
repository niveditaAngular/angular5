import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {HomeComponent} from "./home.component";
import {IndexComponent} from "./index.component";
import {PageoneComponent} from "./pageone.component";
import {PagetwoComponent} from "./pagetwo.component";
import {ChildoneComponent} from "./childone.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {AuthService} from "./auth.service";



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    PageoneComponent,
    PagetwoComponent,
    ChildoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [IndexComponent]
})
export class AppModule { }

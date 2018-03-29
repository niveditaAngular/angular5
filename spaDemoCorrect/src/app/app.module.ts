import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {PageoneComponent} from "./pageone.component";
import {PagetwoComponent} from "./pagetwo.component";
import {PagethreeComponent} from "./pagethree.component";
import {PagefourComponent} from "./pagefour.component";
import {IndexComponent} from "./index.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }

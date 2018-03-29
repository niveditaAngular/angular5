import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyService} from "./my.service";
import {HttpModule} from "@angular/http";
import { FirstComponent } from './first.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MyService],
  bootstrap: [FirstComponent]
})
export class AppModule { }

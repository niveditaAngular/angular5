import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {EagerComponent} from "./eager.component";
import {RouterModule} from "@angular/router";
import {lazyConst} from "./app.routes";
@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    lazyConst
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

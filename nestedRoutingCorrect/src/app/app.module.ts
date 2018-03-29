import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {PageoneComponent} from './pageone.component';
import {PagetwoComponent} from './pagetwo.component';
import {ChildoneComponent} from './childone.component';
import {ChildtwoComponent} from './childtwo.component';
import {IndexComponent} from './index.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    ChildoneComponent,
    ChildtwoComponent,
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

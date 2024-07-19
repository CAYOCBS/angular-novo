import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app/app.component';
import { NavComponent } from './app/components/template/nav/nav.component';
import {MatSidenavModule }from '@angular/material/sidenav';
import{ MatListModule}from'@angular/material/list';
import{MatCardModule}from'@angular/material/card';
@NgModule({
  declarations: 
  [
   

   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

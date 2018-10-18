import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from "./http.service";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CakeComponent } from './cake/cake.component';
import { RatingformComponent } from './ratingform/ratingform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CakeComponent,
    RatingformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CheckerComponent } from './checker/checker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

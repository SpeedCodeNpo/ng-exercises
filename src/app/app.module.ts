import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnotherComponent } from './features/another/comp2.component';
import { Comp1Component } from './features/comp1/comp1.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, AnotherComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

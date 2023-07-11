import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './app/features/comp1/comp1.component';
import { AtomButtonComponent } from './app/core-view/components/atoms/atom-button/atom-button.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, AtomButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

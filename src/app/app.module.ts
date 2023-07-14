import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './features/comp1/comp1.component';
import { MyStandaloneComponent } from './standalone/my-standalone/my-standalone.component';
import { Comp2Component } from './features/comp2/comp2.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component],
  imports: [BrowserModule, MyStandaloneComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

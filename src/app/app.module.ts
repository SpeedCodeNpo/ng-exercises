import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './features/comp1/comp1.component';
import { CoreViewModule } from './core-view/core-view.module';

@NgModule({
  declarations: [AppComponent, Comp1Component],
  imports: [BrowserModule, CoreViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

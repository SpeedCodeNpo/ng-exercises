import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnotherComponent } from './features/another/another.component';
import { HomeComponent } from './features/comp1/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AnotherComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import {
  MAT_RADIO_DEFAULT_OPTIONS,
  MatRadioModule,
} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, Comp1Component],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

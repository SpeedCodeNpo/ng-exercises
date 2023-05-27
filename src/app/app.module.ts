import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrambleGameComponent } from './feature/scramble-game/scramble-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrambleGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

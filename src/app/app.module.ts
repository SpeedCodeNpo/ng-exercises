import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttribPageComponent } from './features/attrib-page/attrib-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AttribPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardViewComponent } from './features/card-view/card-view.component';
import { CardPageComponent } from './features/card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    CardPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardPageComponent } from './features/card-page/card-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CardPageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

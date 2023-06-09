import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePlayComponent } from './pipe-play/pipe-play.component';
import { MetricConverterPipe } from './custom-pipes/metric-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePlayComponent,
    MetricConverterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

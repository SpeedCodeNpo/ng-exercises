import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyPlayComponent } from './features/my-play/my-play.component';
import { HighlightMarkerDirective } from './core/directives/highlight-marker.directive';

@NgModule({
  declarations: [AppComponent, MyPlayComponent, HighlightMarkerDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

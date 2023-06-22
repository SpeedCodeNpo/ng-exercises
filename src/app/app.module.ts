import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPageComponent } from './features/my-page/my-page.component';
import { TimesDirective } from './core/directives/duplicat.directive';

@NgModule({
  declarations: [AppComponent, MyPageComponent, TimesDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

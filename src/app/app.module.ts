import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyPageComponent } from './features/my-page/my-page.component';
import { TimesDirective } from './core/directives/duplicat.directive';

@NgModule({
  declarations: [AppComponent, MyPageComponent, TimesDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

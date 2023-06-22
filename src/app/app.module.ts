import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiplierDirective } from './core/directives/multiplier.directive';
import { MyPageComponent } from './features/my-page/my-page.component';



@NgModule({
  declarations: [AppComponent, MyPageComponent, MultiplierDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

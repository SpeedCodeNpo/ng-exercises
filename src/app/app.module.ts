import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogDashboardComponent } from './features/dog-dashboard/dog-dashboard.component';

@NgModule({
  declarations: [AppComponent, DogDashboardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

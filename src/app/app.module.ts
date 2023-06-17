import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MyFilterPipe } from './features/dashboard/pipes/my-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DashboardComponent, MyFilterPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomButtonComponent } from './components/atoms/atom-button/atom-button.component';



@NgModule({
  declarations: [AtomButtonComponent],
  imports: [
    CommonModule
  ], exports: [ AtomButtonComponent]
})
export class CoreViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatRadioModule],
  exports: [MatButtonModule, MatRadioModule],
})
export class MaterialModule {}

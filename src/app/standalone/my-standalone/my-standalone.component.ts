import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from 'src/app/features/comp2/comp2.component';

@Component({
  selector: 'app-my-standalone',
  standalone: true,
  imports: [CommonModule, Comp2Component],
  templateUrl: './my-standalone.component.html',
  styleUrls: ['./my-standalone.component.scss']

})
export class MyStandaloneComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-standalone.component.html',
  styleUrls: ['./my-standalone.component.scss']
})
export class MyStandaloneComponent {

}

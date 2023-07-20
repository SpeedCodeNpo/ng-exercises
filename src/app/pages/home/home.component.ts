import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  router = inject(Router);

  onSelect(message: string) {
    this.router.navigate(['/comp2', message]);
  }
}

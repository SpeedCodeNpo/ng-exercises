import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  router = inject(Router);
  theMessage = '';

  onSelect() {
    const message = this.theMessage;
    this.router.navigate(['/comp2', message]);
  }
}

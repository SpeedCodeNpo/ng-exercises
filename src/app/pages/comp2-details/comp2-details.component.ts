import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp2-details',
  templateUrl: './comp2-details.component.html',
  styleUrls: ['./comp2-details.component.scss'],
})
export class Comp2DetailsComponent {
  public receivedId: string | null = 'none';
  route = inject(ActivatedRoute);

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.receivedId = id;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isNgOnChanges = false;
  isNgOnInit = false;
  isNngDoCheck = false;

  ngOnChanges() {
    console.log("Activated: ngOnChanges");
    this.isNgOnChanges = true;
  }
  ngOnInit() {
    console.log("Activated: ngOnInit");
    this.isNgOnInit = true;
  }
  ngDoCheck() {
    console.log("Activated: ngDoCheck");
    this.isNngDoCheck = true;
  }

  ngOnDestroy() {
    console.log("Activated: ngOnDestroy");
    this.isNngDoCheck = true;
  }

}

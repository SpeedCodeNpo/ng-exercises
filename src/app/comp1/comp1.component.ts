import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';
import { UserInterface } from '../interface/user';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  selectedModifiedStyle = 'state-normal'; //Other options : state-success and state-warn

  //=============================================
  // Functions
  //=============================================
} //end comp1

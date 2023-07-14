import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Module } from 'src/app/module2/module2.module';
import { Comp2Component } from 'src/app/module2/comp2/comp2.component';

@Component({
  selector: 'app-my-standalone',
  standalone: true,
  imports: [CommonModule, Module2Module],
  templateUrl: './my-standalone.component.html',
  styleUrls: ['./my-standalone.component.scss'],
})
export class MyStandaloneComponent {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  first: number = 8;
  second: number = 2;
  p3: number = this.first + this.second;
  result: number = this.first >= this.second ? this.first : this.second;
  f1: number = this.randNum(); // Math.floor(Math.random() * 1000 + 1 );
  f2: number = this.randNum(); // Math.floor(Math.random() * 1000 + 1 );
  f3: number = this.f1 + this.f2;
  result2: number = this.result2 = this.f1 >= this.f2 ? this.f1 : this.f2;
  // rand1: number;

   randNum() {
    return Math.floor(Math.random() * 1000 + 1 );
 }
  ngOnInit() {

  }

  constructor() {
    // this.result = this.first >= this.second ? this.first : this.second;
    // this.result2 = this.f1 >= this.f2 ? this.f1 : this.f2;
    }
  }

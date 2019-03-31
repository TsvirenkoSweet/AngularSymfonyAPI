import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Symfony API';
  items = [
    1,
    2,
    3,
    4,
    5
  ];

  curent = 1;

  onClick(numbers: number) {
      this.curent = numbers;
  }
}

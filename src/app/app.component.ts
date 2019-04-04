import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [
    {
      name: 'Ford',
      color: 'white',
      id: 1
    }
  ];
}

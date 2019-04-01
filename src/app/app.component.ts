import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <input type="text" class="form-control" [(ngModel)]="searchCar">
      <ul class="list-group">
        <li *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index"
        ><b>{{ i + 1 }}</b> {{car.name}} <i>{{car.descr}}</i></li>
      </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    {name: 'Mazda', descr: 'WFM 2'},
    {name: 'Bently', descr: 'WFM 3'},
    {name: 'Audi', descr: 'WFM 4'},
    {name: 'Mercedes', descr: 'WFM 5'},
    {name: 'BWM', descr: 'WFM 6'}
  ];
}

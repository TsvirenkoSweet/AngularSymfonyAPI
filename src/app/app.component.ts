import {Component} from '@angular/core';
import {CarsService} from './cars.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements Cars {

  cars: Cars[] = [];

  constructor(private carsService: CarsService) {  }

  name: string;
  color: string;
  id: number;

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((data: Cars[]) => this.cars = data);
  }
}

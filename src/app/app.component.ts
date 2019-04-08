import {Component} from '@angular/core';
import {CarsService} from './cars.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements Cars {

  cars: Cars[] = [];
  carName = '';

  constructor(private carsService: CarsService) {  }

  name: string;
  color: string;
  id: number;

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((data: Cars[]) => this.cars = data);
  }

  addCars() {
    this.carsService.
    addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

}

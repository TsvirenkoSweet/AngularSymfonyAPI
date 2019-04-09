import {Component} from '@angular/core';
import {CarsService} from './cars.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements Cars {

  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ];
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
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService
      .changeColor(car, this.getRandomColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

}

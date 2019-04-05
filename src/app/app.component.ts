import {Component} from '@angular/core';
import {CarsService} from './cars.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements Cars {

  cars: Cars[] = [];

  constructor(private carsService: CarsService) {  }


  color: string;
  id: number;
  name: string;



  loadCars() {
    this.carsService
      .getCars()
      .subscribe((data: Cars[]) => this.cars = data);
  }
}

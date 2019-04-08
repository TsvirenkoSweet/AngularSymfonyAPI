import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class CarsService {

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get('http://localhost:3000/cars');
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };

    return this.http.post('http://localhost:3000/cars', data);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()

export class CarsService implements Cars {

  constructor(private http: HttpClient) {}

  color: string;
  id: number;
  name: string;

  getCars(): Observable<Cars[]> {
    return this.http.get('http://localhost:3000/test').pipe(map(data => {
      const usersList = data.cars;
      console.log(usersList);
      return usersList.map((user: any) => {
        return {id: user.id, name: user.name, color: user.color};
      });
    }));
  }
}

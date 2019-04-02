export class CarsService {
  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  addCar = (name: string) => {
    this.cars.push({
      isSold: false,
      name
    });
  }
}

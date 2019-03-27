import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: {name: string, year: number}[] = [
    {
      name: 'Apple',
      year: 2019
    },
    {
      name: 'Samsung',
      year: 2019
    },
    {
      name: 'Lenovo',
      year: 2019
    }
  ];

  constructor() {
  }

  updateProductList(product: {name: string, year: number}) {
    this.products.push(product);
  }

}

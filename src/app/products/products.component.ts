import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productTitle = '';
  productYear = 2019;

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

  addProduct() {
    this.products.push({
      name: this.productTitle,
      year: this.productYear
    });
    this.productTitle = '';
    this.productYear = 2019;
  }
}

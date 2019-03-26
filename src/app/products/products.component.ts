import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productTitle = '';

  addProductStatus = false;

  products = ['Apple', 'Samsung', 'Lenovo', 'HTC', 'Sony', 'Prestigio'];

  dates = [
    new Date(2019, 2, 20).toDateString(),
    new Date(2019, 12, 21).toDateString(),
    new Date(2019, 3, 1).toDateString(),
    new Date(2019, 5, 5).toDateString(),
  ];

  constructor() {
  }

  addProduct() {
    this.addProductStatus = true;
    this.products.push(this.productTitle);
    this.productTitle = '';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  productTitle = '';

  addProductStatus = false;

  products = ['Apple', 'Samsung', 'Lenovo'];

  items = [
    {
      id: 11,
      name: 'item 1'
    },
    {
      id: 233,
      name: 'item 2'
    },
    {
      id: 32,
      name: 'item 3'
    },
    {
      id: 441,
      name: 'item 4'
    },
    {
      id: 5,
      name: 'item 5'
    },
    {
      id: 622,
      name: 'item 6'
    }
  ];

  constructor() {
  }

  addProduct() {
    this.addProductStatus = true;
    this.products.push(this.productTitle);
    this.productTitle = '';
  }
}

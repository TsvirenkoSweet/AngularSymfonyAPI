import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  canAddProduct = false;

  constructor() {
    setTimeout( () => {
      this.canAddProduct = true;
    }, 4000);
  }
}

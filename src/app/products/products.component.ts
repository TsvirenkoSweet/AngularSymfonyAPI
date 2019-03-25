import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  addProductStatus = '';
  inputText = '';

  constructor() {
  }

  addProduct() {
    this.addProductStatus = 'Product added';
  }

  onInput(event) {
      this.inputText = event.target.value;
  }
}

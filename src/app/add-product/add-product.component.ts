import {Component, EventEmitter, OnInit, Output} from '@angular/core';

const output = Output('onAddProduct');

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productYear = 2019;
  @output productEmmiter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addProduct(productEl: HTMLInputElement) {
    this.productEmmiter.emit({name: productEl.value, year: this.productYear});
    productEl.value = '';
    this.productYear = 2019;
  }
}

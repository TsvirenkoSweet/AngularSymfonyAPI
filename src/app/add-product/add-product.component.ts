import {Component, EventEmitter, OnInit, Output} from '@angular/core';

const output = Output('onAddProduct');

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productTitle = '';
  productYear = 2019;
  @output productEmmiter = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.productEmmiter.emit({name: this.productTitle, year: this.productYear});
    this.productTitle = '';
    this.productYear = 2019;
  }
}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

const output = Output('onAddProduct');

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @output productEmmiter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('productYearInput') productYearInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addProduct(productEl: HTMLInputElement) {
    this.productEmmiter.emit({name: productEl.value, year: +this.productYearInput.nativeElement.value});
    productEl.value = '';
    this.productYearInput.nativeElement.value = '';
  }
}

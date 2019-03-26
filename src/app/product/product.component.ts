import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productTitle = 'Apple';
  productPublishedDate = '05.03.2019';

  getProductTitle() {
    return this.productTitle;
  }
}

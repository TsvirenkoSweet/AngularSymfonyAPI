import {Component, Input} from '@angular/core';
// Todo what we need to do with duplicated decorator property when we publish private area
const input = Input('productItem');

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @input product: {name: string, year: number};

  private productItem = false;

}

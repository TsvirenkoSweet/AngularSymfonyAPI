import {AfterViewInit, Component, ContentChild, ElementRef, Input} from '@angular/core';

const input = Input('productItem');

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements AfterViewInit {

  @input product: {name: string, year: number};
  @ContentChild('productHeading') productHeading: ElementRef;

  ngAfterViewInit() {
    console.log(this.productHeading);
  }

}

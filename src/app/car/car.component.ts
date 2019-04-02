import { Component, Input } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car;

  constructor(private consoleService: ConsoleService) {}

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }

}

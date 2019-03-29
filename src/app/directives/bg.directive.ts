import {Directive, ElementRef, OnInit} from '@angular/core';


@Directive({
  selector: '[appBg]'
})

export class BgDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}

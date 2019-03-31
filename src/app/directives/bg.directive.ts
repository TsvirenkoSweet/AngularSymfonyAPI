import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBg]'
})

export class BgDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
    this.renderer.addClass(this.element.nativeElement, 'green-text');
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}

import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBg]'
})

export class BgDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'red';
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'grey';
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
  }

}

import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appBg]'
})

export class BgDirective implements OnInit {

  @Input('appBg') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.defaultColor;
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
  }

}

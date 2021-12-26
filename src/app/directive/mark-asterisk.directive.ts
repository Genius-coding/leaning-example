import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appMarkAsterisk]'
})
export class MarkAsteriskDirective implements OnInit, OnChanges {
  @Input() appMarkAsterisk: boolean;

  constructor(private renderer: Renderer2, private elR: ElementRef) {
  }


  markOrRemoveAsterisk() {
    const element = this.elR.nativeElement;
    if(!element.getElementsByClassName('required-asterisk').length && this.appMarkAsterisk) {
      const spanAsterisk = this.renderer.createElement('span');
      const contentAsterisk = this.renderer.createText('*');
      this.renderer.appendChild(spanAsterisk, contentAsterisk);
      this.renderer.addClass(spanAsterisk, 'required-asterisk');
      this.renderer.appendChild(element, spanAsterisk);
    } else if (element.getElementsByClassName('required-asterisk').length && !this.appMarkAsterisk){
      this.renderer.removeChild(element,element.getElementsByTagName('span')[0]);
    }
  }


  ngOnInit() {
    this.markOrRemoveAsterisk();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.markOrRemoveAsterisk();
}


}

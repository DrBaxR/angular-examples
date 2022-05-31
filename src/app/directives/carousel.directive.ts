import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

interface Context {
  $implicit: string,
  controller: {
    next: () => void,
    prev: () => void,
  }
}

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  @Input('appCarouselOf') images!: string[];


  private prev = (): void => {
    const next = this._index - 1;
    if (next < 0) {
      this._index = this.images.length - 1;
    } else {
      this._index = next;
    }

    this._context.$implicit = this.images[this._index];
  }

  private next = (): void => {
    const next = this._index + 1;
    if (next > this.images.length - 1) {
      this._index = 0;
    } else {
      this._index = next;
    }

    this._context.$implicit = this.images[this._index];
  }

  private _index: number = 0;

  private _context: Context = {
    $implicit: '',
    controller: {
      prev: this.prev,
      next: this.next,
    }
  }

  constructor(
    private template: TemplateRef<Context>,
    private container: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this._context.$implicit = this.images[0];

    this.container.createEmbeddedView(this.template, this._context);
  }

}

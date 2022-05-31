import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor]'
})
export class CustomForDirective implements OnInit {

  @Input('appCustomForIterate') items!: any[];

  constructor(
    private template: TemplateRef<{ $implicit: any, index: number }>,
    private container: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.items.forEach((item, index) => {
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index
      })
    })
  }

}

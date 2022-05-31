import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnInit {
  @Input() appCustomIf!: boolean;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    if (this.appCustomIf) {
      this.container.createEmbeddedView(this.template);
    }
  }

}

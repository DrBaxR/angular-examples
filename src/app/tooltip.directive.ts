import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip = '';
  @Input() tooltipBackgroundColor = '';
  @Input() tooltipTextColor = '';

  private _popup: HTMLElement | undefined;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const el = this.element.nativeElement as HTMLElement;
    const x = el.getBoundingClientRect().left + el.offsetWidth / 2;
    const y = el.getBoundingClientRect().top + el.offsetHeight / 2 + 10;

    this.createTooltipPopup(x, y);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._popup?.remove();
  }

  createTooltipPopup(x: number, y: number) {
    const popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute('class', 'tooltip-container');
    document.body.append(popup);
    this._popup = popup;

    popup.style.top = `${y}px`;
    popup.style.left = `${x - popup.offsetWidth / 2}px`;

    if (this.tooltipBackgroundColor.length) {
      popup.style.backgroundColor = this.tooltipBackgroundColor;
    }

    if (this.tooltipTextColor.length) {
      popup.style.color = this.tooltipTextColor;
    }
  }

}

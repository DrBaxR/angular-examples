import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AdDirective } from '../directives/ad.directive';
import { AdItem } from '../model/ad-item';
import { AdComponent } from './ads/ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  interval: any;

  ngOnInit(): void {
    // Loads component initially, otherwise the first component gets rendered after 3 seconds pass
    this.loadComponent();

    // Sets up the interval to clear and re-render next component
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  // The main stuff happens here
  loadComponent() {
    // get the next ad to be rendered
    const adItem = this.getCurrentAdItem();

    // get the container where you have to render the component
    const viewContainerRef = this.adHost.viewContainerRef;
    // remove whatever was there before
    viewContainerRef.clear();

    // render the new component and feed it the input
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  private getCurrentAdItem() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    return this.ads[this.currentAdIndex];
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

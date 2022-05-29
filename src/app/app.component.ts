import { Component, OnInit } from '@angular/core';

import { AdService } from './services/ad.service';
import { AdItem } from './model/ad-item';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}


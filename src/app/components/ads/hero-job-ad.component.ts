import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `,
  styles: ['.job-ad {background-color: lightblue; padding: 10px; border-radius: 10px; border: 2px solid blue}']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}


import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `,
  styles: ['.hero-profile {background-color: lightgray; padding: 10px; border-radius: 10px; border: 1px solid black}']
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}



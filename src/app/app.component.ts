import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';
import { FlowerService } from './services/flower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [{provide: AnimalService, useValue: {symbol: 'hedgehog'}}],
  // providers: [{provide: AnimalService, useValue: {symbol: 'hedgehog'}}]
})
export class AppComponent {
  title = 'angular-examples';

  constructor(
    public flower: FlowerService,
    public animal: AnimalService
  ) {}
}

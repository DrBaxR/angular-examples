import { Component, Host, OnInit, SkipSelf } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { FlowerService } from 'src/app/services/flower.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [
    {provide: FlowerService, useValue: {symbol: 'sunflower'}}
  ],
  viewProviders: [
    {provide: AnimalService, useValue: {symbol: 'dog'}}
  ]
})
export class ChildComponent {

  // constructor(@SkipSelf() public flower: FlowerService, public animal: AnimalService) {}

  // constructor(
  //   public flower: FlowerService, 
  //   public animal: AnimalService
  // ) {}

  constructor(
    public flower: FlowerService, 
    @Host() @SkipSelf() public animal: AnimalService
  ) {}
}

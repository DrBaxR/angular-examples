import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { FlowerService } from 'src/app/services/flower.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

  constructor(
    public flower: FlowerService,
    public animal: AnimalService,
  ) { }

  ngOnInit(): void {
  }

}

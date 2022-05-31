import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-examples';

  images = [
    'https://picsum.photos/id/1/400/400',
    'https://picsum.photos/id/2/400/400',
    'https://picsum.photos/id/3/400/400',
    'https://picsum.photos/id/100/400/400',
  ]
}

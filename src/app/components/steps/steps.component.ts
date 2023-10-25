import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  Caption4111: string = 'Sed ut perspiciatis unde omnis'
  @Input()
  Caption41: string = 'Duis aute irure dolor in reprehenderit'
  @Input()
  Caption4: string = 'Lorem ipsum dolor sit amet'
  @Input()
  Caption411: string = 'Excepteur sint occaecat cupidatat'
  constructor() {}
}

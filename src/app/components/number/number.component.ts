import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-number',
  templateUrl: 'number.component.html',
  styleUrls: ['number.component.css'],
})
export class Number {
  @Input()
  rootClassName: string = ''
  @Input()
  Value: string = '1'
  constructor() {}
}

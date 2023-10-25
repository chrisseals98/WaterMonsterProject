import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-branding',
  templateUrl: 'branding.component.html',
  styleUrls: ['branding.component.css'],
})
export class Branding {
  @Input()
  Logo_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  CompanyName: string = 'Helpa'
  @Input()
  Logo_src: string = '/assets/logo.svg'
  constructor() {}
}

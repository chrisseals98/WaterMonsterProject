import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css'],
})
export class Banner {
  @Input()
  Bold1: string = 'newsletter'
  @Input()
  Redirect: string = 'https://medium.com'
  @Input()
  Caption: string = 'Get updates and action alerts from Helpa by joining our'
  @Input()
  CaptionMobile: string = 'Join our'
  @Input()
  Bold: string = 'newsletter'
  @Input()
  RedirectMobile: string = 'https://medium.com'
  constructor() {}
}

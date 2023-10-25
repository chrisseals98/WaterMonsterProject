import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  Link1: string = 'Take Action'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  Link: string = 'Mission'
  @Input()
  image_src: string = '/assets/hamburger.svg'
  @Input()
  Link2: string = 'News'
  @Input()
  Link3: string = 'Contact'
  constructor() {}
}

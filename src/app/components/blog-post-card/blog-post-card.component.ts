import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card',
  templateUrl: 'blog-post-card.component.html',
  styleUrls: ['blog-post-card.component.css'],
})
export class BlogPostCard {
  @Input()
  label: string = 'ENTERPRISE'
  @Input()
  rootClassName: string = ''
  @Input()
  profile_alt: string = 'profile'
  @Input()
  when: string = '3 days ago'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
  @Input()
  title: string = 'Lorem ipsum dolor sit amet'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=400'
  @Input()
  author: string = 'Jane Doe'
  @Input()
  image_alt: string = 'image'
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}

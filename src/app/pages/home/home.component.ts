import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawmv9o: string = ' '
  raw844x: string = ' '
  rawr8jc: string = ' '
  raw88q5: string = ' '
  rawf5db: string = ' '
  rawce4t: string = ' '
  rawcphk: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('WaterMonsterProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'WaterMonsterProject',
      },
    ])
  }
}

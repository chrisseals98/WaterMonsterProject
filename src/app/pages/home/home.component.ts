import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawg2du: string = ' '
  rawtj9g: string = ' '
  rawxn9p: string = ' '
  rawzd9i: string = ' '
  rawkl3u: string = ' '
  rawu3h9: string = ' '
  rawj5od: string = ' '
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

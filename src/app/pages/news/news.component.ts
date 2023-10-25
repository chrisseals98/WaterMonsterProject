import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css'],
})
export class News {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('News - WaterMonsterProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'News - WaterMonsterProject',
      },
    ])
  }
}

import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-donate',
  templateUrl: 'donate.component.html',
  styleUrls: ['donate.component.css'],
})
export class Donate {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Donate - WaterMonsterProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Donate - WaterMonsterProject',
      },
    ])
  }
}

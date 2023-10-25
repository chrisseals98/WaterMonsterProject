import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-merch',
  templateUrl: 'merch.component.html',
  styleUrls: ['merch.component.css'],
})
export class Merch {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Merch - WaterMonsterProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Merch - WaterMonsterProject',
      },
    ])
  }
}

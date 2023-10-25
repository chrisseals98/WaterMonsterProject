import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'home-template',
  templateUrl: 'home-template.component.html',
  styleUrls: ['home-template.component.css'],
})
export class HomeTemplate {
  rawyimm: string = ' '
  rawauod: string = ' '
  rawbtuw: string = ' '
  rawuv4s: string = ' '
  rawb53y: string = ' '
  raw1r1d: string = ' '
  rawvnf4: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('HomeTemplate - WaterMonsterProject')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'HomeTemplate - WaterMonsterProject',
      },
    ])
  }
}

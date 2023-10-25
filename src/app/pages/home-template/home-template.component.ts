import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'home-template',
  templateUrl: 'home-template.component.html',
  styleUrls: ['home-template.component.css'],
})
export class HomeTemplate {
  rawq4g9: string = ' '
  rawdp6e: string = ' '
  rawcu4i: string = ' '
  rawfgv0: string = ' '
  raw8wyz: string = ' '
  rawli9j: string = ' '
  raw22fy: string = ' '
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

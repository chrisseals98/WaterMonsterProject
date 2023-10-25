import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { News } from './news.component'

const routes = [
  {
    path: '',
    component: News,
  },
]

@NgModule({
  declarations: [News],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [News],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsModule {}

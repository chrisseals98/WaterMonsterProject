import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { HomeTemplate } from './home-template.component'

const routes = [
  {
    path: '',
    component: HomeTemplate,
  },
]

@NgModule({
  declarations: [HomeTemplate],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [HomeTemplate],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeTemplateModule {}

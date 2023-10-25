import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { Donate } from './donate.component'

const routes = [
  {
    path: '',
    component: Donate,
  },
]

@NgModule({
  declarations: [Donate],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Donate],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DonateModule {}

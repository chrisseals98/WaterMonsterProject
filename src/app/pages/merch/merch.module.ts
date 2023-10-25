import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Merch } from './merch.component'

const routes = [
  {
    path: '',
    component: Merch,
  },
]

@NgModule({
  declarations: [Merch],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Merch],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MerchModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks } from './navigation-links/navigation-links.component'
import { Number } from './number/number.component'
import { Branding } from './branding/branding.component'
import { IconContainer } from './icon-container/icon-container.component'
import { Banner } from './banner/banner.component'
import { BlogPostCard } from './blog-post-card/blog-post-card.component'
import { Steps } from './steps/steps.component'

@NgModule({
  declarations: [
    NavigationLinks,
    Number,
    Branding,
    IconContainer,
    Banner,
    BlogPostCard,
    Steps,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationLinks,
    Number,
    Branding,
    IconContainer,
    Banner,
    BlogPostCard,
    Steps,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}

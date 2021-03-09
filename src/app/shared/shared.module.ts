import {NgModule} from '@angular/core';

import {PageBlockComponent} from './components/page-block/page-block.component';
import {ExternalLinkComponent} from './components/external-link/external-link.component';

@NgModule({
  imports: [],
  exports: [
    PageBlockComponent,
    ExternalLinkComponent
  ],
  declarations: [PageBlockComponent, ExternalLinkComponent],
  providers: [],
})
export class SharedModule {
}

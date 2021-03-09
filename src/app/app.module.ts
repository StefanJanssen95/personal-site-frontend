import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import { ProfileBlockComponent } from './page/components/profile-block/profile-block.component';
import {SummaryBlockComponent} from './page/components/summary-block/summary-block.component';
import {ShowcaseBlockComponent} from './page/components/showcase-block/showcase-block.component';
import {SocialBlockComponent} from './page/components/social-block/social-block.component';
import {SocialItemComponent} from './page/components/social-block/components/social-item/social-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBlockComponent,
    SummaryBlockComponent,
    ShowcaseBlockComponent,
    SocialBlockComponent,
    SocialItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

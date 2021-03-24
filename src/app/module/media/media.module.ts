import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaCategoryListComponent } from './component/media-category-list/media-category-list.component';
import { IndexComponent } from './container/index/index.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaSubCompComponent } from './component/media-sub-comp/media-sub-comp.component';
import { MediaHeaderComponent } from './component/media-header/media-header.component';
import { MediaBannerAreaComponent } from './component/media-banner-area/media-banner-area.component';
import { MediaFooterComponent } from './component/media-footer/media-footer.component';

@NgModule({
  declarations: [
    IndexComponent,
    MediaCategoryListComponent,
    MediaSubCompComponent,
    MediaHeaderComponent,
    MediaBannerAreaComponent,
    MediaFooterComponent,
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
  ],
})
export class MediaModule {
}

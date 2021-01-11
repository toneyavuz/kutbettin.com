import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './container/index/index.component';
import { MediaRoutingModule } from './media-routing.module';
import { MediaCategoryListComponent } from './component/media-category-list/media-category-list.component';

@NgModule({
  declarations: [
    IndexComponent,
    MediaCategoryListComponent,
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
  ],
})
export class MediaModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaCategoryListComponent } from './component/media-category-list/media-category-list.component';
import { IndexComponent } from './container/index/index.component';
import { MediaRoutingModule } from './media-routing.module';

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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './container/index/index.component';
import { VideoComponent } from './container/video/video.component';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
  declarations: [
    VideoComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
  ],
})
export class VideoModule {
}

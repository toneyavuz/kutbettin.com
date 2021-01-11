import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './container/index/index.component';
import { VideoComponent } from './container/video/video.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'detail/:id',
    component: VideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {
}

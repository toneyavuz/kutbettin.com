import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './container/index/index.component';

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
    path: 'photo',
    loadChildren: () => import('./module/photo/photo.module').then(m => m.PhotoModule),
  },
  {
    path: 'video',
    loadChildren: () => import('./module/video/video.module').then(m => m.VideoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {
}

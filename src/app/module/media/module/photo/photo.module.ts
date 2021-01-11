import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexComponent } from './container/index/index.component';
import { PhotoComponent } from './container/photo/photo.component';
import { PhotoRoutingModule } from './photo-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    PhotoComponent,
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
  ],
})
export class PhotoModule {
}

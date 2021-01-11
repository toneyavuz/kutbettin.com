import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCategoryListComponent } from './media-category-list.component';

describe('MediaCategoryListComponent', () => {
  let component: MediaCategoryListComponent;
  let fixture: ComponentFixture<MediaCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

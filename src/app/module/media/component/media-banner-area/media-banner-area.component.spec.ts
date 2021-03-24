import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBannerAreaComponent } from './media-banner-area.component';

describe('MediaBannerAreaComponent', () => {
  let component: MediaBannerAreaComponent;
  let fixture: ComponentFixture<MediaBannerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaBannerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBannerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

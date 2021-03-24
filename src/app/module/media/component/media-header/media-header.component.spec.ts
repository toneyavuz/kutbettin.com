import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaHeaderComponent } from './media-header.component';

describe('MediaHeaderComponent', () => {
  let component: MediaHeaderComponent;
  let fixture: ComponentFixture<MediaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

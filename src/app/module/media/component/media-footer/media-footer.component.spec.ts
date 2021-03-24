import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFooterComponent } from './media-footer.component';

describe('MediaFooterComponent', () => {
  let component: MediaFooterComponent;
  let fixture: ComponentFixture<MediaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

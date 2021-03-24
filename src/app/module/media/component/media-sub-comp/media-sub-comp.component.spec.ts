import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSubCompComponent } from './media-sub-comp.component';

describe('MediaSubCompComponent', () => {
  let component: MediaSubCompComponent;
  let fixture: ComponentFixture<MediaSubCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaSubCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSubCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestReviewComponent } from './prayer-request-review.component';

describe('PrayerRequestReviewComponent', () => {
  let component: PrayerRequestReviewComponent;
  let fixture: ComponentFixture<PrayerRequestReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

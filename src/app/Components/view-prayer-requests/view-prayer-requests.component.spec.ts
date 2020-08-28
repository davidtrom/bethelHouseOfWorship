import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrayerRequestsComponent } from './view-prayer-requests.component';

describe('ViewPrayerRequestsComponent', () => {
  let component: ViewPrayerRequestsComponent;
  let fixture: ComponentFixture<ViewPrayerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrayerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrayerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

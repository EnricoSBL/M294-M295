import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDetailComponent } from './time-detail.component';

describe('TimeDetailComponent', () => {
  let component: TimeDetailComponent;
  let fixture: ComponentFixture<TimeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

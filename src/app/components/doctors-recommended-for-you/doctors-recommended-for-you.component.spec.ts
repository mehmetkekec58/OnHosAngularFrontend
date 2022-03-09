import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsRecommendedForYouComponent } from './doctors-recommended-for-you.component';

describe('DoctorsRecommendedForYouComponent', () => {
  let component: DoctorsRecommendedForYouComponent;
  let fixture: ComponentFixture<DoctorsRecommendedForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsRecommendedForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsRecommendedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

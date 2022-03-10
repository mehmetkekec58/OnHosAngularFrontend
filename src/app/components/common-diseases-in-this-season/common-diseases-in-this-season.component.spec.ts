import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDiseasesInThisSeasonComponent } from './common-diseases-in-this-season.component';

describe('CommonDiseasesInThisSeasonComponent', () => {
  let component: CommonDiseasesInThisSeasonComponent;
  let fixture: ComponentFixture<CommonDiseasesInThisSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonDiseasesInThisSeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDiseasesInThisSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

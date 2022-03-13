import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkumaListesiComponent } from './okuma-listesi.component';

describe('OkumaListesiComponent', () => {
  let component: OkumaListesiComponent;
  let fixture: ComponentFixture<OkumaListesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkumaListesiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkumaListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

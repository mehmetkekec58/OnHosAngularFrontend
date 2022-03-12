import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerMenuListComponent } from './drawer-menu-list.component';

describe('DrawerMenuListComponent', () => {
  let component: DrawerMenuListComponent;
  let fixture: ComponentFixture<DrawerMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

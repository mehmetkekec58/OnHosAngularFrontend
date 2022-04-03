import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateUserComponent } from './profile-update-user.component';

describe('ProfileUpdateUserComponent', () => {
  let component: ProfileUpdateUserComponent;
  let fixture: ComponentFixture<ProfileUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUpdateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

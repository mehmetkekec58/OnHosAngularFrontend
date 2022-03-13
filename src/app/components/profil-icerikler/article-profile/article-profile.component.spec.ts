import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleProfileComponent } from './article-profile.component';

describe('ArticleProfileComponent', () => {
  let component: ArticleProfileComponent;
  let fixture: ComponentFixture<ArticleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

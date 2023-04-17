import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardsComponent } from './blog-cards.component';

describe('BlogCardsComponent', () => {
  let component: BlogCardsComponent;
  let fixture: ComponentFixture<BlogCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

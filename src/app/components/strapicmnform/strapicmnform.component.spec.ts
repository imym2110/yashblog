import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapicmnformComponent } from './strapicmnform.component';

describe('StrapicmnformComponent', () => {
  let component: StrapicmnformComponent;
  let fixture: ComponentFixture<StrapicmnformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrapicmnformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrapicmnformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

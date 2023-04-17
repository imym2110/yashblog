import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocardComponent } from './democard.component';

describe('DemocardComponent', () => {
  let component: DemocardComponent;
  let fixture: ComponentFixture<DemocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualexpenseComponent } from './individualexpense.component';

describe('IndividualexpenseComponent', () => {
  let component: IndividualexpenseComponent;
  let fixture: ComponentFixture<IndividualexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualexpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

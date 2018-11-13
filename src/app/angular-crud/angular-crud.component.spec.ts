import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCRUDComponent } from './EmployeeList';

describe('AngularCRUDComponent', () => {
  let component: AngularCRUDComponent;
  let fixture: ComponentFixture<AngularCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

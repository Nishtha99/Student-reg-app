import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudent2Component } from './add-student2.component';

describe('AddStudent2Component', () => {
  let component: AddStudent2Component;
  let fixture: ComponentFixture<AddStudent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

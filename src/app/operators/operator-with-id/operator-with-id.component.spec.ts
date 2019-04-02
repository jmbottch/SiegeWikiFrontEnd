import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWithIdComponent } from './operator-with-id.component';

describe('OperatorWithIdComponent', () => {
  let component: OperatorWithIdComponent;
  let fixture: ComponentFixture<OperatorWithIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorWithIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

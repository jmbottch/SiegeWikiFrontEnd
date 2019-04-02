import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldWithIdComponent } from './world-with-id.component';

describe('WorldWithIdComponent', () => {
  let component: WorldWithIdComponent;
  let fixture: ComponentFixture<WorldWithIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldWithIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

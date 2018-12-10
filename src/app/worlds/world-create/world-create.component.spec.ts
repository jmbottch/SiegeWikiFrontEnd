import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCreateComponent } from './world-create.component';

describe('WorldCreateComponent', () => {
  let component: WorldCreateComponent;
  let fixture: ComponentFixture<WorldCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

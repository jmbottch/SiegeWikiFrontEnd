import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonWidthIdComponent } from './season-width-id.component';

describe('SeasonWidthIdComponent', () => {
  let component: SeasonWidthIdComponent;
  let fixture: ComponentFixture<SeasonWidthIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonWidthIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonWidthIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

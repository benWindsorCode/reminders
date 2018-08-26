import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderElementComponent } from './reminder-element.component';

describe('ReminderElementComponent', () => {
  let component: ReminderElementComponent;
  let fixture: ComponentFixture<ReminderElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

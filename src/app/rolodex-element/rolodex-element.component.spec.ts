import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolodexElementComponent } from './rolodex-element.component';

describe('RolodexElementComponent', () => {
  let component: RolodexElementComponent;
  let fixture: ComponentFixture<RolodexElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolodexElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolodexElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

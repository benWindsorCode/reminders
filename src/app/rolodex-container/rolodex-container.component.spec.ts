import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolodexContainerComponent } from './rolodex-container.component';

describe('RolodexContainerComponent', () => {
  let component: RolodexContainerComponent;
  let fixture: ComponentFixture<RolodexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolodexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolodexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

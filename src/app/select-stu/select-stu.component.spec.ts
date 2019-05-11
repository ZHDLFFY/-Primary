import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStuComponent } from './select-stu.component';

describe('SelectStuComponent', () => {
  let component: SelectStuComponent;
  let fixture: ComponentFixture<SelectStuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

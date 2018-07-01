import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseheaderComponent } from './baseheader.component';

describe('BaseheaderComponent', () => {
  let component: BaseheaderComponent;
  let fixture: ComponentFixture<BaseheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

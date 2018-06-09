import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillfamilyComponent } from './skillfamily.component';

describe('SkillfamilyComponent', () => {
  let component: SkillfamilyComponent;
  let fixture: ComponentFixture<SkillfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

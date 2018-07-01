import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterheaderComponent } from './masterheader.component';

describe('MasterheaderComponent', () => {
  let component: MasterheaderComponent;
  let fixture: ComponentFixture<MasterheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

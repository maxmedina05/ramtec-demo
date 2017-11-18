import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageListComponent } from './voltage-list.component';

describe('VoltageListComponent', () => {
  let component: VoltageListComponent;
  let fixture: ComponentFixture<VoltageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

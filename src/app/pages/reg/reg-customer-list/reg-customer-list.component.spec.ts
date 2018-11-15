import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCustomerListComponent } from './reg-customer-list.component';

describe('RegCustomerListComponent', () => {
  let component: RegCustomerListComponent;
  let fixture: ComponentFixture<RegCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

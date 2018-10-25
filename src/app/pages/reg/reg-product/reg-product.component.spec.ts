import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProductComponent } from './reg-product.component';

describe('RegProductComponent', () => {
  let component: RegProductComponent;
  let fixture: ComponentFixture<RegProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

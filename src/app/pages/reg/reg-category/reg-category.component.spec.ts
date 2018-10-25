import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCategoryComponent } from './reg-category.component';

describe('RegCategoryComponent', () => {
  let component: RegCategoryComponent;
  let fixture: ComponentFixture<RegCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

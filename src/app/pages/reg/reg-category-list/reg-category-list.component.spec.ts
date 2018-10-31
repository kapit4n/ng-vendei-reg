import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCategoryListComponent } from './reg-category-list.component';

describe('RegCategoryListComponent', () => {
  let component: RegCategoryListComponent;
  let fixture: ComponentFixture<RegCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

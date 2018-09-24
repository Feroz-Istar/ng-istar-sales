import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardExpandedComponent } from './product-card-expanded.component';

describe('ProductCardExpandedComponent', () => {
  let component: ProductCardExpandedComponent;
  let fixture: ComponentFixture<ProductCardExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

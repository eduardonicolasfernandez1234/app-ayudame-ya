import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCanjeoComponent } from './producto-canjeo.component';

describe('ProductoCanjeoComponent', () => {
  let component: ProductoCanjeoComponent;
  let fixture: ComponentFixture<ProductoCanjeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCanjeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCanjeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

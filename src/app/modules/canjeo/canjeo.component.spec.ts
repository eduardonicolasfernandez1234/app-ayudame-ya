import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjeoComponent } from './canjeo.component';

describe('CanjeoComponent', () => {
  let component: CanjeoComponent;
  let fixture: ComponentFixture<CanjeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanjeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

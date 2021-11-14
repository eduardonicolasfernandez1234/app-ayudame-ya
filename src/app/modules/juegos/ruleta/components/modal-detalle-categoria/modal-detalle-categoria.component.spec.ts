import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleCategoriaComponent } from './modal-detalle-categoria.component';

describe('ModalDetalleCategoriaComponent', () => {
  let component: ModalDetalleCategoriaComponent;
  let fixture: ComponentFixture<ModalDetalleCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalleCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalleCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

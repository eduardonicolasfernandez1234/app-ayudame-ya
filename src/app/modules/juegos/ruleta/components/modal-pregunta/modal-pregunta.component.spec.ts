import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreguntaComponent } from './modal-pregunta.component';

describe('ModalPreguntaComponent', () => {
  let component: ModalPreguntaComponent;
  let fixture: ComponentFixture<ModalPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPreguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { Opcion } from 'src/app/shared/models/opcion';
import { Pregunta } from 'src/app/shared/models/pregunta';

@Component({
  selector: 'app-modal-pregunta',
  templateUrl: './modal-pregunta.component.html',
  styleUrls: ['./modal-pregunta.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(300, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ModalPreguntaComponent implements OnInit, OnDestroy {

  contador!: number;
  TIEMPO_BARRA: number = 100;
  valorBar: number = 100;
  tiempoLimite!: number;
  ayuda: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<ModalPreguntaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pregunta: Pregunta, opciones: Opcion[] },
    private timer: TimerService
  ) { }

  ngOnInit(): void {
    this.tiempoLimite = this.timer.obtenerTiempo();
    this.valorBar = this.valorBar + (this.TIEMPO_BARRA/this.tiempoLimite);
    this.timer.iniciarTimer();
    this.timer.getObservable().subscribe((val) => {
      this.contador = val
      this.valorBar = this.valorBar - (this.TIEMPO_BARRA/this.tiempoLimite);
      if(this.contador < 1){
        this.timer.finalizarTimer();
        this.dialogRef.close();
      }
    })
  }

  ngOnDestroy(){
    this.timer.finalizarTimer();
  }

  onNoClick(): void {
    this.timer.finalizarTimer();
    this.data.pregunta == null ? this.dialogRef.close(true) : this.dialogRef.close();
  }

  seleccionarOpcion(opcion: Opcion){
    this.dialogRef.close({opcion: opcion, ayuda: this.ayuda});
  }

}

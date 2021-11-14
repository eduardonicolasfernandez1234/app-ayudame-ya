import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimerRespuestaService } from 'src/app/core/services/timer/timer-respuesta.service';

@Component({
  selector: 'app-modal-resultado',
  templateUrl: './modal-resultado.component.html',
  styleUrls: ['./modal-resultado.component.scss']
})
export class ModalResultadoComponent implements OnInit, OnDestroy {

  contador!: number;
  TIEMPO_BARRA: number = 100;
  valorBar: number = 100;
  tiempoLimite!: number;
  ayuda: boolean = false;

  path: string = '../../../../../../assets/images/';

  constructor(
    public dialogRef: MatDialogRef<ModalResultadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private timerRespuesta: TimerRespuestaService
  ) { }

  ngOnInit(): void {
    if(this.data.res == 'correcto'){
      this.path = this.path + 'correcto' + (Math.floor(Math.random() * 4) + 1) + '.gif';
      console.log(this.path);
    }else{
      this.path = this.path + 'error' + (Math.floor(Math.random() * 4) + 1) + '.gif';
      console.log(this.path);
    }
    this.tiempoLimite = this.timerRespuesta.obtenerTiempo();
    this.valorBar = this.valorBar + (this.TIEMPO_BARRA/this.tiempoLimite);
    this.timerRespuesta.iniciarTimer();
    this.timerRespuesta.getObservable().subscribe((val) => {
      this.contador = val
      this.valorBar = this.valorBar - (this.TIEMPO_BARRA/this.tiempoLimite);
      if(this.contador < 1){
        this.timerRespuesta.finalizarTimer();
        this.dialogRef.close();
      }
    })
  }

  ngOnDestroy(){
    // this.timerRespuesta.finalizarTimer();
  }

  onNoClick(): void {
    // this.timerRespuesta.finalizarTimer();
    this.dialogRef.close();
  }

}

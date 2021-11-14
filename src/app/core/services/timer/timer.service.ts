import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  TIEMPO_RESPUESTA: number = 15;

  source$ = new BehaviorSubject<number>(this.TIEMPO_RESPUESTA);
  intervalo: any; 

  constructor() { }

  iniciarTimer(){
    this.source$.next(this.TIEMPO_RESPUESTA);
    this.intervalo = setInterval(() => {
      const newVal = this.source$.getValue() - 1;
      this.source$.next(newVal);
    }, 1000)
  }

  finalizarTimer(){
    clearInterval(this.intervalo);
    setTimeout(() => {
      this.source$.next(this.TIEMPO_RESPUESTA);
    }, 200)
  }

  public getObservable(){
    return this.source$.asObservable();
  }

  obtenerTiempo(): number{
    return this.TIEMPO_RESPUESTA;
  }
}

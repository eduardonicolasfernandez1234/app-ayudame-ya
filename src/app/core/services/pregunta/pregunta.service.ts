import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from 'src/app/shared/models/pregunta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http: HttpClient) { }

  listadoPreguntasPorCategoria(modoJuegoId: number){
    const url = `${environment.apiBase}juego/modojuego/${modoJuegoId}/preguntas/`;
    return this.http.get<Pregunta[]>(url);
  }

  validarPregunta(data: any){
    const url = `${environment.apiBase}juego/pregunta/revisar-pregunta/`;
    return this.http.post(url, data);
  }
}
